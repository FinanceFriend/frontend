import React, { useState } from "react";
import axios from "axios";
import "./Popup.css";

const ChangePassword = ({ currentUser }) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");

  const handleUpdatePassword = async () => {
    // Add your logic for updating the password
  };
  return (
    <div className="container">
      <input
        className="inputField"
        type="password"
        value={currentPassword}
        onChange={(e) => setCurrentPassword(e.target.value)}
        placeholder="Enter current password"
      />
      <input
        className="inputField"
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        placeholder="Enter new password"
      />
      <button className="updateButton" onClick={handleUpdatePassword}>
        Update Password
      </button>
      {error && <p className="errorMsg">{error}</p>}
    </div>
  );
};

export default ChangePassword;
