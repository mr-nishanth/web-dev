import React from 'react'
import { useRef } from 'react'
import { Link } from "react-router-dom"

import "../styles/Main.css"
export default function Main() {

    const inputRef = useRef(null)
    return (
        <div className='container'>
            <h1 className='title text-light'>Rapid Fire Round</h1>

            <ol>
                <li>
                    You will be asked 20 questions one after another.
                </li>
                <li>
                    20 points is awarded for correct answers.
                </li>
                <li>
                    Each questions has three options , You can choose only one option
                </li>
                <li>
                    You can review and change answers before the quiz finish.
                </li>
                <li>
                    The result will be declared at the end of the quiz.
                </li>
            </ol>

            <form action="" id='form'>
                <input ref={inputRef} type="text" name="" id="" className='userid' placeholder='Username*' required />
            </form>

            <div className='start'>
                {/* to={'quiz'}  => localhost:3000/quiz */}
                <Link className='btn btn-start' to={'quiz'}>Start Quiz</Link>
            </div>
        </div>
    )
}
