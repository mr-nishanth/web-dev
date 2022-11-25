import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeColor } from '../redux/features/theme'

function ColorSelected() {
    const [color, setColor] = useState("black")
    const dispatch = useDispatch()
    const handleColor = (e) => {
        setColor(e.target.value)
    }

    const handleColorClick = () => {
        dispatch(changeColor(color))
    }
    return (
        <div>
            <input type="color" name="" id="" value={color} onChange={handleColor} />
            <button type='submit' onClick={handleColorClick}>Change Color</button>
        </div>
    )
}

export default ColorSelected