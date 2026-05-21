import React from 'react'
import "./Header.css"
import Navbar from "../Navbar/Navbar"

const Header = () => {
  return (
    <header>
        <div className='wrapper'>
            <Navbar />
            <div className='heading'>
            <p className='heading-p1'>Hello there, my name is <span>MARIO</span></p>
            <h1 className='heading-h'>Full-Stack Solutions as Unique as Your Brand.</h1>
            <p className='heading-p2'>I’m a <span>Software Engineer</span></p>
            <a href="#about" className='more-btn'>See More</a>
            </div>
        </div>
    </header>
  )
}

export default Header
