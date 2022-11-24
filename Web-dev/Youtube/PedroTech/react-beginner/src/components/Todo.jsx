import React from 'react'

function Todo({ tasks, handleDelete }) {
    return (
        <div className="list">

            {
                tasks.map((task) => (
                    <div className='task' key={task.id}>
                        <h1 >{task.name}</h1>
                        <button onClick={() => handleDelete(task)}>X</button>
                    </div>
                ))
            }

        </div>
    )
}

export default Todo