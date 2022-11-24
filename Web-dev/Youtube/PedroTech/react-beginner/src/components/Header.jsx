import React from 'react'

function Header(props) {
    return (
        <>
            <div className='addTask'>
                <input type="text" onChange={props.handleInput} />
                <button className='' onClick={props.handleClick}>Add Task</button>
            </div>

        </>
    )
}

export default Header