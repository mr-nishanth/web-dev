import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Todo from './components/Todo';

function App() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState("")
  const handleInput = (e) => {
    setNewTask(e.target.value)
  }
  const handleClick = (e) => {
    let task = {
      id: new Date().getTime(),
      name: newTask
    }
    setTasks([...tasks, task])
    console.log(task)
  }
  const handleDelete = (taskName) => {
    // const deletedTodo = tasks.filter((task) => task === taskName ? false : true)
    const deletedTodo = tasks.filter((task) => task.id !== taskName.id)
    setTasks(deletedTodo)

  }
  return (
    <div className="App">
      <Header handleInput={handleInput} handleClick={handleClick} />
      <Todo handleDelete={handleDelete} tasks={tasks} />
    </div>
  );
}

export default App;
