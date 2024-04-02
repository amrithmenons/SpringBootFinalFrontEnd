import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios library
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [emailError, setEmailError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    } else {
      setEmailError('');
    }

    // Simple password validation
    if (password.length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }

    // Make a GET request to the JSON server endpoint
    try {
      const response = await axios.get(`http://localhost:8080/users?email=${email}&password=${password}`);

      // Check if the user with the provided credentials exists
      if (response.data.length > 0) {
        setShowSuccessMessage(true);

        // Hide the success message after 3 seconds (3000 milliseconds)
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);

        // Redirect to the home page
        navigate('/');
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
      alert('An error occurred while fetching user details');
    }
  };

  return (
    <div className='login-page'>
      <div className='login-container'>
        <div className='login-form'>
          <h1>Login</h1>
          {showSuccessMessage && (
            <div className='success-message'>Successfully Logged in</div>
          )}
          <form onSubmit={handleLogin}>
            <input
              type='text'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className='error-message'>{emailError}</div>
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type='submit'>Login</button>
          </form>
          <div className='register-link'>
            <p>
              Don't have an account?{' '}
              <Link to='/register'>Register here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
