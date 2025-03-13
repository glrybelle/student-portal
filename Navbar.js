import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar({ username }) {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    // Clear the current user from localStorage
    localStorage.removeItem('currentUser');
    navigate('/login');
  };
  
  return (
    <div className="navbar">
      <div className="user-profile">
        <div className="avatar">
          <img src="./image.jpg" alt="avatar"/>
          <path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </div>
        <div className="user-info">
          <span><strong>{username || 'Gloribel Rejalbo'}</strong></span>
          <span>Student ID: 123456789</span>
        </div>
      </div>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}

export default Navbar;