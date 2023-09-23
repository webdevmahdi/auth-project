import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div className='div'>
            <Link to='/'>Home</Link>
            <Link to='/friends'>Friends</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/about'>About</Link>
        </div>

    )
}
export default Header;