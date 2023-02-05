import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

export const NavBar = () => {
    return (
        <div className='navbar'>
            <div>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                    <div>
                        Login
                    </div>
                </Link>
            </div>
            <div>
                <Link to="/register" style={{ textDecoration: 'none' }}>
                    <div>
                        Register
                    </div>
                </Link>
            </div>
        </div>
    )
}
