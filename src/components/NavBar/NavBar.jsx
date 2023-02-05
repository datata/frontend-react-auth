import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../feature/auth/authSlice'
import './NavBar.css'

export const NavBar = () => {
    const authUser = useSelector(state => state.auth);
    const dispatch = useDispatch();

    function handleLogout(e) {
        dispatch(logout({}))
    }

    return (
        <div className='navbar'>
            {authUser.isLogged ?
                <div>
                    <div className='navbar'>
                        <div>
                            <Link to="/profile" style={{ textDecoration: 'none' }}>
                                <div className='navbar-menu-links'>
                                    Profile
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link to="/login" style={{ textDecoration: 'none' }} >
                                <div
                                    onClick={handleLogout}
                                    className="navbar-menu-links"
                                >
                                    Logout
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                :
                <div>
                    <div className='navbar'>
                        <div>
                            <Link to="/login" style={{ textDecoration: 'none' }}>
                                <div className='navbar-menu-links'>
                                    Login
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link to="/register" style={{ textDecoration: 'none' }}>
                                <div className='navbar-menu-links'>
                                    Register
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            }
        </div>

    )
}
