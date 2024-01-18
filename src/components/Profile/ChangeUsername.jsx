import React, { useState } from 'react';
import axios from 'axios';
import "./Popup.css"

const ChangeUsername = ({ currentUsername }) => {
  const [newUsername, setNewUsername] = useState('');
  const [error, setError] = useState('');
  

  const handleUpdateUsername = async () => {
    try {
      if (!newUsername) {
        setError('New username cannot be empty');
        return;
      }

      const response = await axios.put(`/api/user/${encodeURIComponent(currentUsername)}`, {
        newUsername,
      });

      const data = response.data;

      if (data.success) {
        console.log('Username updated successfully');
      } else {
        setError(`Error updating username: ${data.message}`);
      }
    } catch (error) {
      setError(`Error updating username: ${error.message}`);
    }
  };

  return (
    <div className="container">
      <input
        className="inputField"
        type="text"
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
        placeholder="Enter new username"
      />
      <button className="updateButton" onClick={handleUpdateUsername}>
        Update Username
      </button>
      {error && <p className="errorMsg">{error}</p>}
    </div>
  );
};

export default ChangeUsername;
