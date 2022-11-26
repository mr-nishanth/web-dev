import "./todoList.css"

import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios'
function TodoList(props) {

    console.log(props.todoList)

    const taskComplete = (task) => {
        const payload = {
            _id: task._id,
            todo: task.todo,
            isCompleted: !task.isCompleted
        }
        axios.put(`http://localhost:8000/api/tasks/${task._id}`)
            .then(res => {
                console.log(res.data)
                props.taskComplete(res.data)
            })
            .catch(err => console.log(err))
    }
    const removeTask = (task) => {

        axios.delete(`http://localhost:8000/api/tasks/${task._id}`)
            .then(res => {
                console.log(res.data)
                props.removeTask(res.data)
            })
            .catch(err => console.log(err))
    }
    // =======================================================================================
    const content = props.todoList.map((task, index) => {
        return (
            <li key={task._id}>
                <div style={{ display: 'flex' }}>
                    <CheckIcon className={task.isCompleted ? "completed" : "notCompleted"} />
                    <p className={task.isCompleted ? 'taskCompleted' : ""} onClick={() => taskComplete(task)}>{task.todo}</p>
                </div>
                <div>
                    <EditIcon className="edit" onClick={() => {
                        props.taskUpdate(task)
                        props.showPopup()
                    }} />
                    <CloseIcon className="close" onClick={() => removeTask(task)} />
                </div>
            </li>
        )
    })

    return (
        <div className='taskList'>
            <ul>
                {content}
            </ul>
        </div>
    )
}

export default TodoList