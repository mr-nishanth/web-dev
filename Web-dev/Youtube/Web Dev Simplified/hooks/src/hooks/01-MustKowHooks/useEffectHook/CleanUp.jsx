import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


function CleanUp() {
    const [resourceType, setResourceType] = useState("posts")
    useEffect(() => {
        console.log("resourceType changed to " + resourceType)
        return () => {
            console.log("return form resourceType (CLEANUP) " + resourceType)
        }
    }, [resourceType])



    const style = { margin: "1rem", padding: "1rem", border: "1px solid red", borderRadius: "10px" }


    return (
        <>
            <div style={style}>
                <button style={style}
                    onClick={() => setResourceType("posts")}>Posts</button>
                <button style={style}
                    onClick={() => setResourceType("users")}>Users</button>
                <button style={style}
                    onClick={() => setResourceType("comments")}>Comments</button>
            </div>
            <h1>ResourceType : {resourceType.toUpperCase()}</h1>


        </>
    )
}

export default CleanUp