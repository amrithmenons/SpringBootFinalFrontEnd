

import './Profile.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [updatedName, setUpdatedName] = useState('');
  const [updatedEmail, setUpdatedEmail] = useState('');

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = async () => {
    try {
      const response = await axios.get('http://localhost:8080/users/1');
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const handleEdit = () => {
    setEditMode(true);
    setUpdatedName(user.name);
    setUpdatedEmail(user.email);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
  };

  const handleUpdateProfile = async () => {
    try {
      await axios.put(`http://localhost:8080/users/${user.id}`, {
        name: updatedName,
        email: updatedEmail,
      });
      setEditMode(false);
      fetchUserDetails();
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  };

  const handleDeleteUser = async () => {
    if (window.confirm('Are you sure you want to delete your account?')) {
      try {
        await axios.delete(`http://localhost:8080/users/${user.id}`);
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };

  return (
    <div className='profile-page'>
      <div className='profile-container'>
        <h1>Profile</h1>
        <div>
          <strong>Name:</strong> {user.name}
        </div>
        <div>
          <strong>Email:</strong> {user.email}
        </div>
        {editMode ? (
          <div>
            <label>Name:</label>
            <input
              type='text'
              value={updatedName}
              onChange={(e) => setUpdatedName(e.target.value)}
            />
            <label>Email:</label>
            <input
              type='text'
              value={updatedEmail}
              onChange={(e) => setUpdatedEmail(e.target.value)}
            />
            <button onClick={handleUpdateProfile}>Update Profile</button>
            <button onClick={handleCancelEdit}>Cancel</button>
          </div>
        ) : (
          <div>
            <button onClick={handleEdit}>Edit Profile</button>
            <button onClick={handleDeleteUser}>Delete Account</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
/*// src/pages/profile/Profile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [updatedName, setUpdatedName] = useState('');
  const [updatedEmail, setUpdatedEmail] = useState('');

  useEffect(() => {
    // Fetch user details when the component mounts
    fetchUserDetails();
  }, []);

  const fetchUserDetails = async () => {
    try {
      const response = await axios.get('http://localhost:8080/users/1'); // Replace with the correct user ID
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const handleEdit = () => {
    setEditMode(true);
    setUpdatedName(user.name);
    setUpdatedEmail(user.email);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
  };

  const handleUpdateProfile = async () => {
    try {
      await axios.put(`http://localhost:8080/users/${user.id}`, {
        name: updatedName,
        email: updatedEmail,
      });
      setEditMode(false);
      // Fetch updated user details after the update
      fetchUserDetails();
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  };

  const handleDeleteUser = async () => {
    if (window.confirm('Are you sure you want to delete your account?')) {
      try {
        await axios.delete(`http://localhost:8080/users/${user.id}`);
        // Redirect to the home page or perform other actions after deletion
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };

  return (
    <div className='profile-page'>
      <div className='profile-container'>
        <h1>Profile</h1>
        <div>
          <strong>Name:</strong> {user.name}
        </div>
        <div>
          <strong>Email:</strong> {user.email}
        </div>
        {editMode ? (
          <div>
            <label>Name:</label>
            <input
              type='text'
              value={updatedName}
              onChange={(e) => setUpdatedName(e.target.value)}
            />
            <label>Email:</label>
            <input
              type='text'
              value={updatedEmail}
              onChange={(e) => setUpdatedEmail(e.target.value)}
            />
            <button onClick={handleUpdateProfile}>Update Profile</button>
            <button onClick={handleCancelEdit}>Cancel</button>
          </div>
        ) : (
          <div>
            <button onClick={handleEdit}>Edit Profile</button>
            <button onClick={handleDeleteUser}>Delete Account</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;*/
