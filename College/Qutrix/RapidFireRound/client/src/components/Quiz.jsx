import React from 'react'

export default function Quiz() {
    // Next button event handler
    const onNext = () => {
        console.log("Next")
    }
    // Previous button event handler
    const onPrev = () => {
        console.log("Previous")
    }
    return (
        <div className='container'>
            <h1 className='title text-light'>Rapid Fire Round</h1>

            {/* display question */}

            {/* Button */}
            <div className="grid">
                <button onClick={onPrev} className='btn prev'>Previous</button>
                <button onClick={onNext} className='btn next'>Next</button>
            </div>
        </div>
    )
}
