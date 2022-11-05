import React from 'react'
import "./Nav.css"

const Nav = () => {
  return (
    <div className='nav nav_black' >
      <div className="nav__container">
        <img className='nav__logo'
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Netflix Image" />
        <img className='nav__avatar'
          src="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1667659721~exp=1667660321~hmac=6b6afcba604b03ed5f569741bf0931bcdc1a33b3ec330cafb98e07169da11c49" alt="" />
      </div>
    </div>
  )
}

export default Nav