import React from 'react'
import { useState } from 'react'

function Counter() {
    const [counter, setCounter] = useState(0)

    // In useState , there are two way to pass the value like 1) above hard coder Every time the useState is render , 2) function version it run very first time the component render
    const [count, setCount] = useState(() => {
        console.log("Function running")
        return 0
    })

    const handleMinus = () => {
        // setCounter(prev => prev - 1)
        setCount(prev => prev - 1)
    }

    const handlePlus = () => {
        // setCounter(prev => prev + 1)
        setCount(prev => prev + 1)
    }

    const handleTheme = () => {

    }
    return (
        <div>
            <button type='button' onClick={handleMinus}> - </button>
            <h1>{counter}</h1>
            <button type='button' onClick={handlePlus}> + </button>
            <br /> <br /> <hr />
            <button type='button' onClick={handleMinus}> - </button>
            <h1>{count}</h1>
            <button type='button' onClick={handlePlus}> + </button>
            <br />
            <button type='button' onClick={handleTheme}>Change theme</button>
        </div>
    )
}

export default Counter