import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  const handleLogin = (e) => {
    e.preventDefault();
    
    // Get the list of registered users from localStorage
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    
    // Check if the user exists and credentials match
    const user = registeredUsers.find(
      user => user.username === username && user.password === password
    );

    if (user) {
      // Store current user in localStorage and navigate to dashboard
      localStorage.setItem('currentUser', JSON.stringify(user));
      navigate('/dashboard');
    } else {
      // Show error message if user doesn't exist or credentials don't match
      setError('Invalid Credentials');
    }
  };
  
  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2 style={{ color: 'white', textAlign: 'center' }}>Log In</h2>
        <form onSubmit={handleLogin}>
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
          {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
          <div>
            <button type="submit">Log In</button>
            <Link to="/register">
              <button type="button">Sign Up</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
