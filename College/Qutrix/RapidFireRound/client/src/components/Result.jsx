import React from 'react'
import "../styles/Result.css"
import { Link } from "react-router-dom"
import ResultTable from './ResultTable'
export default function Result() {
    const onRestart = () => {
        console.log("Restart")
    }
    return (
        <div className='container'>
            <h1 className='title text-light'>Rapid Fire Round</h1>

            <div className="result flex-center">
                <div className="flex">
                    <span>Username</span>
                    <span className='bold'>Nishanth</span>
                </div>
                <div className="flex">
                    <span>Total Quiz Point : </span>
                    <span className="bold">50</span>
                </div>
                <div className="flex">
                    <span>Total Question : </span>
                    <span className="bold">05</span>
                </div>
                <div className="flex">
                    <span>Total Attempt : </span>
                    <span className="bold">03</span>
                </div>
                <div className="flex">
                    <span>Total Earn Point : </span>
                    <span className="bold">30</span>
                </div>
                <div className="flex">
                    <span>Quiz Result : </span>
                    <span className="bold">Selected</span>
                </div>
            </div>

            <div className="start">
                <Link to={'/'} className="btn" onClick={onRestart}>Restart</Link>
            </div>
            <div className="container">
                {/* Result Table */}
                <ResultTable />
            </div>
        </div>
    )
}
