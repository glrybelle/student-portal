import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
 

function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [lastname, setLastname] = useState('');
  const [firstname, setFirstname] = useState("");
  const navigate = useNavigate();
  
  const handleRegister = (e) => {
    e.preventDefault();
    
    if (username && password) { 
      // Get existing registered users or create empty array
      const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
      
      // Check if username already exists
      const userExists = registeredUsers.some(user => user.username === username);
      
      if (userExists) {
        alert('Username already exists. Please choose another username.');
        return;
      }
      
      // Add new user to registered users
      registeredUsers.push({ username, password, email, lastname, firstname });
      
      // Save updated registered users to localStorage
      localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
      
      // Set current user
      localStorage.setItem('currentUser', JSON.stringify({ username }));
      
      // Navigate to dashboard
      navigate('/dashboard');
    }
  };
  
  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2 style={{ color: 'white' }}><center>Register</center></h2>
        <form onSubmit={handleRegister}>
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="firstname"
              placeholder="Firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="lastname"
              placeholder="Lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
            />
          </div>
          <div>
            <button type="submit">Sign In</button>
            <Link to="/login">
              <button type="button">Back to Login</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;