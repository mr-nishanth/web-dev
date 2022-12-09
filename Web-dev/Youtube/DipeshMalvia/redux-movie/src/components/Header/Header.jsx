import "./Header.scss"

import React, { useState } from 'react'
import { Link } from "react-router-dom"
import User from "../../images/user.png"
import { useDispatch } from "react-redux"
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice"
function Header() {
    const [term, setTerm] = useState("")
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(term)
        if (term === "") return alert("Please enter search term")
        dispatch(fetchAsyncMovies(term))
        dispatch(fetchAsyncShows(term))
        setTerm("")
    }
    const handleChange = (e) => {
        setTerm(e.target.value)
    }
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">
                    Movie App
                </Link>
            </div>
            <div className="search-bar">
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" value={term} placeholder="Search Movies or Shows" onChange={handleChange} />
                    <button type="submit"><i className="fa fa-search"></i></button>
                </form>
            </div>
            <div className="user-image">
                <img src={User} alt="user" />
            </div>
        </header>
    )
}

export default Header