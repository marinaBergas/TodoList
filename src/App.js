
import './App.css';
import { Header } from './component/Header';
import {useState} from 'react';
import Tasks from './component/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
      id:'1',
      text:'marina'
    },
    {
      id:'2',
      text:'sameria'
    },
    {
      id:'3',
      text:'demiana'
    }
  ])
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Tasks tasks={tasks}/>
      </div>
    </div>
  );
}

export default App;
