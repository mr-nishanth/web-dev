import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <header>
            <nav style={{ marginTop: "100px", display: "flex", justifyContent: "space-around" }}>
                <Link to="/">Home</Link>
                <Link to="/provider">Provider</Link>
                <Link to="/consumer">Consumer</Link>
                <Link to="/matchWhistle">MatchWhistle</Link>
            </nav>
        </header>
    )
}

export default NavBar