import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import CleanUp from './CleanUp'

// clean up effect
function ResizeWindow() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])
    return (
        <div><h1 style={{ color: "blue" }}>{windowWidth}</h1>
            <CleanUp />
        </div>


    )
}

export default ResizeWindow