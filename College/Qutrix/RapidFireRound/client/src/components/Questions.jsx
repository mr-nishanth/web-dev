import React, { useState } from 'react'




export default function Questions() {

    const [checked, setChecked] = useState(undefined)

    const onSelect = () => {

        console.log("Select")
    }

    return (
        <div className='questions'>
            <h2 className='text-light'>Simple Question 1</h2>

            <ul>
                <li>
                    <input
                        type="radio"
                        value={true}
                        name="options"
                        id="q1-option"
                        onChange={onSelect()}
                    />
                    <label htmlFor="q1-option" className='text-primary'>Option 1</label>
                    <div className="check checked"></div>
                </li>

            </ul>
        </div>
    )
}
