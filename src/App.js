import "./App.css";
import { Header } from "./component/Header";
import { useState, useEffect } from "react";
import Tasks from "./component/Tasks";
import AddTask from "./component/AddTask";
import Footer from "./component/Footer";
import About from "./component/About";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  //delet task
  const DeleteTask = async (id) => {
    await fetch(
      `https://my-json-server.typicode.com/marinaBergas/TodoList/tasks/${id}`,
      {
        method: "DELETE",
      }
    );
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //oggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
    const res = await fetch(
      `https://my-json-server.typicode.com/marinaBergas/TodoList/tasks/${id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updTask),
      }
    );

    const data = await res.json();
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  const addTask = async (task) => {
    const res = await fetch(
      "https://my-json-server.typicode.com/marinaBergas/TodoList/tasks",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(task),
      }
    );
    const data = await res.json();
    setTasks([...tasks, data]);
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  useEffect(() => {
    //get fethch
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);
  //fetch tasks
  const fetchTasks = async () => {
    const res = await fetch(
      "https://my-json-server.typicode.com/marinaBergas/TodoList/tasks"
    );
    const data = await res.json();
    return data;
  };
  //fetch task
  const fetchTask = async (id) => {
    const res = await fetch(
      `https://my-json-server.typicode.com/marinaBergas/TodoList/tasks/${id}`
    );
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch(
        "https://my-json-server.typicode.com/marinaBergas/TodoList/tasks"
      );
      const data = await res.json();
      //console.log(data)
      setTasks(data);
    };
    fetchTasks();
  }, []);

  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header
            onAdd={() => setShowAddTask(!showAddTask)}
            showTask={showAddTask}
          />
          <Route
            path="/"
            exact
            render={(props) => (
              <>
                {showAddTask && <AddTask onTask={addTask} />}
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={DeleteTask}
                    onToggle={toggleReminder}
                  />
                ) : (
                  "No Tasks To Show"
                )}
              </>
            )}
          />
          <About />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
