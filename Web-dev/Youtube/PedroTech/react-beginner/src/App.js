import { useState } from 'react';
import './App.css';

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
      <div className='addTask'>
        <input type="text" onChange={handleInput} />
        <button className='' onClick={handleClick}>Add Task</button>
      </div>
      <div className="list">

        {
          tasks.map((task) => (
            <>
              <div className='task' key={task.id}>
                <h1 >{task.name}</h1>
                <button onClick={() => handleDelete(task)}>X</button>
              </div>
            </>
          ))
        }

      </div>
    </div>
  );
}

export default App;
