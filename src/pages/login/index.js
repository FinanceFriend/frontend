import axios from "axios";
import "../login/style.css";
import Link from 'next/link';
import { login } from "@/api/user";

import { useState } from 'react';
import { useRouter } from 'next/router';


function  LoginPage() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const response = await login(loginData);
      console.log('Login successful:', response);
      
    } catch (error) {
      console.error('Error during login:', error);
      
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="backgroundContainer">
      <div className="container">
        <div className="header">
          <div className="text">Login</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <input
              type="email"
              placeholder="E-mail"
              name="email"  
              value={loginData.email}  
              onChange={handleInputChange}  // Handle input change
            />
          </div>
          <div className="input">
            <input
              type="password"
              placeholder="Password"
              name="password"  // Add name attribute for password
              value={loginData.password}  // Use state value for password
              onChange={handleInputChange}  // Handle input change
            />
          </div>
        </div>
        <div className="forgot-password">
          Forgot Password? <span>Click Here!</span>
        </div>
        <div className="newUser-buttons">       
        <div className="new-user">
          Don't have an account?
        </div>
        <div className="submit-container">
        <button className="button-empty" onClick={handleLogin}>
          <div className="loginButton">Login</div>
          </button>
          <Link href="/register" passHref legacyBehavior>
            <a className="registerButton noUnderline">Register</a>
          </Link>
        </div> </div>     

      </div>
 
      </div>
    </form>
  );
  


};

export default LoginPage;

