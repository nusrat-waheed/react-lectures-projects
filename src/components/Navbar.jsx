import React from 'react'

import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className='navbar'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About us</NavLink>
                <NavLink to="/courses">Courses</NavLink>
                <NavLink to="register">Register</NavLink>
            </nav>

        </div>
    )
}
