import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import './Profile.css';

export const Profile = () => {
    const userProfile = useSelector(state => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (userProfile.jwt.length === 0) {
            navigate('/login')
        }
    })

    return (
        <div className='profile-form'>
            <Link to={'/home'}>Home</Link>
            <form>
                <h1>userPROFILE</h1>
                <div>
                    <input className='profile-input' type="text" defaultValue={userProfile.user.name} disabled />
                </div>
                <div>
                    <input className='profile-input' type="text" defaultValue={userProfile.user.email} disabled />
                </div>
                {/* <button className='profile-button'>Update</button> */}
            </form>
        </div>
    )
}
