
import './App.css';
import { useEffect, useState } from "react"
import axios from 'axios'
import AddTask from './components/AddTask';
import TodoList from './components/TodoList';

import UpdateTask from './components/UpdateTask';
function App() {
  const [todo, setTodo] = useState([])
  const [taskUpdate, setTaskUpdate] = useState({})
  const [showPopup, setShowPopup] = useState(false)
  useEffect(() => {
    axios.get("http://localhost:8000/api/tasks")
      .then((res) => {
        console.log(res.data)
        // setTodo((prev) => [...prev, res.data])
        setTodo(res.data)
        console.log(todo)
      })
      .catch(err => console.log(err))
  }, [])

  const addTask = newTask => {
    setTodo([...todo, newTask])
  }

  const taskComplete = (task) => {
    const newList = [...todo]
    newList.forEach(item => {
      if (item._id === task._id) {
        item.isComplete = task.isComplete
      }
    })
    setTodo(newList)
  }
  const removeTask = (task) => {
    // const newList = [...todo, task.filter(t => !(t._id === task._id))]
    const newList = todo.filter(item => !(item._id === task._id))
    setTodo(newList)
  }
  const updateTask = task => {
    const newList = [...todo]
    newList.forEach(item => {
      if (item._id === task._id) {
        item.todo = task.todo
      }
    })
    setTodo(newList)
  }
  return (
    <div className="App">
      <h1 className='flex'>Todo Application</h1>
      <AddTask addTask={addTask} />
      < TodoList todoList={todo} taskComplete={taskComplete} removeTask={removeTask}
        taskUpdate={task => setTaskUpdate(task)} showPopup={() => setShowPopup(!showPopup)} />
      {showPopup && <UpdateTask task={taskUpdate} updateTask={updateTask} removePopup={() => setShowPopup(!showPopup)} />}
    </div>
  );
}

export default App;
