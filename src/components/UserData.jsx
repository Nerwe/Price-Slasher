import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

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

    if (savedUsername) setUsername(savedUsername);
    if (savedEmail) setEmail(savedEmail);
  }, [])

  return (
    <div className="flex flex-col gap-4">
      <div className="text-gray-200 text-3xl flex flex-col items-center text-center">
        <img src="favicon.ico" alt="Logo" />
        <h1>Profile</h1>
      </div>
      <div className="flex flex-col">
        <h2>{username}</h2>
        <h4>@{username}</h4>
      </div>
      <button 
        className="px-4 py-2 text-orange-500 border border-orange-500 rounded transition-colors hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:text-white"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  )
}

export default UserData