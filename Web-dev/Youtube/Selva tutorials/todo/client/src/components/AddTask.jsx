import { useState } from "react"
import "./addTask.css"
import axios from 'axios'
function AddTask({ addTask }) {
    const [task, setTask] = useState("")
    const handleTask = (e) => {
        setTask(e.target.value)
    }
    const handleAddTask = () => {
        if (task.trim() === "") return

        // Its return promise
        const payload = {
            todo: task,
            isCompleted: false
        }

        axios.post("http://localhost:8000/api/tasks", payload)
            .then(res => {
                setTask("")
                addTask(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err))

    }
    return (
        <div className="addTask">
            <input type="text" placeholder="Add task ...." value={task} onChange={handleTask} />
            {/* <button type="submit" className="" onClick={handleAddTask}>Add Task</button> */}
            <button type="submit" onClick={handleAddTask}>Add Task</button>
        </div>
    )
}

export default AddTask