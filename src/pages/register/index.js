
import React, { useEffect } from 'react';
import { register } from '../../api/user'; 
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider, } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import "../register/style.css"


function RegisterPage() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');

  const [registerData, setRegisterData] = React.useState({
      username:"",
       email:"",
       password:"",
       dateOfBirth:"",
       countryOfOrigin:"",
       preferredLanguage:""
   })

   const [buttonDisabled, setButtonDisabled] = React.useState(false);



    useEffect(() => {
      if(registerData.email.length > 0 && registerData.password.length> 0 && registerData.username.length > 0) {
        setButtonDisabled(false);
      } else {
        setButtonDisabled(true);
      }
    }, [registerData]);
  

    const handleInputChange = (e) => {
      setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    };
  
    const handleRegister= async (e) => {
      e.preventDefault();
      try {
        const response = await register(registerData)
        console.log('Registration successful:', response);
      } catch (error) {
        console.error('Error during Registration:', error);
      }
    };
    
    return (
    <form onSubmit={handleRegister}>
      <div className="Register-container">
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div className="backgroundContainer">
      
        <div className="container">
          <div className="header">
            <div className="text">Register</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            <div className="input">
              <input
                type="text"
                placeholder="Username"
                name="username"  // Add name attribute for email
                value={registerData.username}  // Use state value for email
                onChange={handleInputChange} 
              />
            </div>
            <div className="input">
              <input
                type="email"
                placeholder="E-mail"
                name="email" 
                value={registerData.email} 
                onChange={handleInputChange}
              /> </div>           
              <div className="input">
              <input
                type="password"
                placeholder="Password"
                name="password"  // Add name attribute for password
                value={registerData.password}  // Use state value for password
                onChange={handleInputChange}  // Handle input change
              />
            </div>
            
            <div className="input">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date of Birth"
                value={registerData.dateOfBirth}
                onChange={(newValue) =>
                  setRegisterData({ ...registerData, dateOfBirth: newValue })
                }
                textField={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
              

            <div className="input">
              <input
                type="text"
                placeholder="Country of Origin"
                name="countryOfOrigin"
                value={registerData.countryOfOrigin}
                onChange={handleInputChange}
              />
            </div>
            <div className="input">
              <input
                type="text"
                placeholder="Preferred Language"
                name="preferredLanguage"
                value={registerData.preferredLanguage}
                onChange={handleInputChange}
              />
          </div>
          <div className="oldUser-buttons">       
        <div className="old-user">
          Already have an account?
        </div>
          <div className="submit-container">
            <Link href="/login" passHref legacyBehavior>
              <a className="loginButton noUnderline">Login</a>
            </Link>
            <button className="button-empty" onClick={handleRegister}>
            <div className="registerButton">Register</div></button>
          </div></div>
        </div>
        </div>
      </div>
      </div></form>
    );
};

export default RegisterPage;
