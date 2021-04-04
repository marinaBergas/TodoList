
import './App.css';
import { Header } from './component/Header';
import {useState} from 'react';
import Tasks from './component/Tasks';
import AddTask from './component/AddTask';

function App() {
  const [tasks, setTasks] = useState([
    {
      id:'1',
      text:'marina',
      reminder:true
    },
    {
      id:'2',
      text:'sameria',
      reminder:true
    },
    {
      id:'3',
      text:'demiana',
      reminder:false
    }
  ])
  const DeleteTask=(id)=>{
    setTasks(tasks.filter(task=>task.id!==id))
 }
 const toggleReminder = (id)=>{
    setTasks(tasks.map(task=>task.id === id ?{...task,reminder:!task.reminder}:task))
 }
  return (
    <div className="App">
      <div className="container">
        <Header />
        <AddTask/>
        {tasks.length>0?<Tasks tasks={tasks} onDelete={DeleteTask} onToggle={toggleReminder}/>:'No Tasks To Show'}
      </div>
    </div>
  );
}

export default App;
