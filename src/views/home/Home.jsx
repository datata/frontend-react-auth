import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css'

export const Home = () => {
  const userProfile = useSelector(state => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
      if (userProfile.jwt.length === 0) {
          navigate('/login')
      }
  })

  return (
    <div className='home'>
      <Link to="/profile">
        Profile
      </Link>
      <Link to="/tasks">
        Tasks
      </Link>
    </div>
  )
}
