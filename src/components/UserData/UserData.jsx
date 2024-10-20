import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './UserData.scss'

const UserData = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    
    navigate('/');
  };

  useEffect(() => {
    const savedUsername = localStorage.getItem('username');
    const savedEmail = localStorage.getItem('email');

    if (savedUsername)
      setUsername(savedUsername);

    if (savedEmail)
      setEmail(savedEmail);

  }, [])

  return (
    <div className='user-data'>
      <div className='user-avatar'>
        <img src='favicon.ico'></img>
      </div>
      <div className='user-data-main'>
        <h2>{username}</h2>
        <h4>@{username}</h4>
      </div>
      <button className='logout-button' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default UserData