import React, { useState } from "react";
import axios from "axios";
import "./Popup.css";
import { updateUserInfo } from "@/api/userService";
import { useAuth } from "@/context/AuthProvider";
const ChangePassword = ({ currentUsername }) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();

  const handleUpdatePassword = async () => {
    try {
      if (!password) {
        setError("New username cannot be empty");
        return;
      }

      const userData = {
        password,
      };

      const response = await updateUserInfo(currentUsername, userData);

      console.log("Registration successful:", response);
      if (response.success) {
        setError("Password successfully changed");
      }
    } catch (error) {
      setError(error + "! Please try again.");
    }
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
        value={password}
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
