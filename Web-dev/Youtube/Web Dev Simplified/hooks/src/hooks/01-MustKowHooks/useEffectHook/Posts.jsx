import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ResizeWindow from './ResizeWindow'

function Posts() {
    const [resourceType, setResourceType] = useState("posts")
    const [items, setItems] = useState([])
    // every time render
    // useEffect(() => {
    //     console.log("render")
    // })

    // only 1st time
    // console.log("render")
    // useEffect(() => {
    //     console.log("unmount 1st time")
    // }, [])

    // render when any (state)changes occurs
    // console.log("render")
    // useEffect(() => {
    //     console.log("resourceType changed")
    // }, [resourceType])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            // .then(json => console.log(json))
            .then(json => setItems(prev => [...prev, json]))
    }, [resourceType])



    const style = { margin: "1rem", padding: "1rem", border: "1px solid red", borderRadius: "10px" }


    return (
        <>
            {/* <div style={style}>
                <button style={style}
                    onClick={() => setResourceType("posts")}>Posts</button>
                <button style={style}
                    onClick={() => setResourceType("users")}>Users</button>
                <button style={style}
                    onClick={() => setResourceType("comments")}>Comments</button>
            </div>
            <h1>ResourceType : {resourceType.toUpperCase()}</h1>

            {
                items.map(item => {
                    return (
                        <pre>{JSON.stringify(item)}</pre>
                    )
                })
            } */}

            <ResizeWindow />

        </>
    )
}

export default Posts