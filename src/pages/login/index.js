import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAuth } from '@/context/AuthProvider';
import "./style.css";

import { login as backendLogin } from "@/api/userService"; 

function LoginPage() {
  const [loginData, setLoginData] = useState({
    login: '',
    password: ''
  });

  const { login } = useAuth(); 
  const router = useRouter();

  const handleInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await backendLogin(loginData); 
      console.log(response)
      if (response.success) {
        login(loginData.login); 
        console.log('Login successful');
        router.push('/dashboard'); 
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="loginContainer">
    <form onSubmit={handleLogin}>
      <div className="backgroundContainerL">
      <div className="containerL">
        <div className="header">
          <div className="text">Login</div>
          <div className="underline"></div>
        </div>
        <div className="inputsL">
          <div className="inputL">
            <input
              type="login"
              placeholder="E-mail"
              name="login"  
              value={loginData.login}  
              onChange={handleInputChange}  // Handle input change
            />
          </div>
          <div className="inputL">
            <input
              type="password"
              placeholder="Password"
              name="password"  // Add name attribute for password
              value={loginData.password}  // Use state value for password
              onChange={handleInputChange}  // Handle input change
            />
          </div>
        </div>
        <div className="newUser-buttons">       
        <div className="new-user">
          Don&apos;t have an account?
        </div>
        <div className="submit-containerL">
        <button className="button-empty" onClick={handleLogin}>
          <div className="loginButtonL">Login</div>
          </button>
          <Link href="/register" passHref legacyBehavior>
            <a className="registerButtonL">Register</a>
          </Link>
        </div> </div>     

      </div>
 
      </div>
    </form></div>
  );
  


};

export default LoginPage;

