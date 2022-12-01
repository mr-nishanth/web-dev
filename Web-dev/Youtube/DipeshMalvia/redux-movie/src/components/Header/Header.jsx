import "./Header.scss"

import React from 'react'
import { Link } from "react-router-dom"
import User from "../../images/user.png"
function Header() {
    return (
        <header className="header">
            <Link to="/">
                <div className="logo">Movie App</div>
            </Link>
            <div className="user-image">
                <img src={User} alt="user" />
            </div>
        </header>
    )
}

export default Header