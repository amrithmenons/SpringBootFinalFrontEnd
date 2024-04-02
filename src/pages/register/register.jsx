import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [registrationError, setRegistrationError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false); // Add state for registration loading
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsRegistering(true); // Set loading state

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      setIsRegistering(false); // Reset loading state
      return;
    } else {
      setEmailError('');
    }

    // Simple password validation
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      setIsRegistering(false); // Reset loading state
      return;
    } else {
      setPasswordError('');
    }

    // Check if the password and confirm password match
    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      setIsRegistering(false); // Reset loading state
      return;
    } else {
      setConfirmPasswordError('');
    }

    const userData = {
      username,
      email,
      password,
    };

    try {
      const response = await axios.post('http://localhost:8080/users/register', userData);
      console.log(response.data); // Optionally, you can log the response
      setIsRegistering(false); // Reset loading state
      navigate('/login'); // Redirect to login page after successful registration
    } catch (error) {
      console.error('Error registering user:', error);
      setRegistrationError('Failed to register user');
      setIsRegistering(false); // Reset loading state
    }
  };

  return (
    <div className='register-page'>
      <div className='register-container'>
        <div className='register-form'>
          <h1>Register</h1>

          {registrationError && <div className='error-message'>{registrationError}</div>}

          <form onSubmit={handleRegister}>
            <input
              type='text'
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
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
            <div className='error-message'>{passwordError}</div>
            <input
              type='password'
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className='error-message'>{confirmPasswordError}</div>
            <button type='submit' disabled={isRegistering}>
              {isRegistering ? 'Registering...' : 'Register'}
            </button>
          </form>
          <div className='login-link'>
            <p>
              Already have an account? <Link to='/login'>Login here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;




/*import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
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
    if (password.length < 8) {
      setPasswordError('Password must be 6 characters long');
      return;
    } else {
      setPasswordError('');
    }

    // Check if the password and confirm password match
    if (password !== confirmPassword) {
      setConfirmPassword('Passwords does\'nt match');
      return;
    } else {
      setConfirmPasswordError('');
    }


    const userData = {
      username,
      email,
      password,
    };

    try {
      const response = await axios.post('http://localhost:8080/users', userData);
      navigate('/');
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className='register-page'>
      <div className='register-container'>
        <div className='register-form'>
          <h1>Register</h1>

          <form onSubmit={handleRegister}>
            <input
              type='text'
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
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
            <div className='error-message'>{passwordError}</div>
            <input
              type='password'
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className='error-message'>{confirmPasswordError}</div>
            <button type='submit'>Register</button>
          </form>
          <div className='login-link'>
            <p>
              Already have an account? <Link to='/login'>Login here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;*/
