import axios from 'axios';

const backendURL = 'http://localhost:3001'; 

export const login = async (loginData) => {
  try {
    console.log("Before axios.post");
const response = await axios.post(`${backendURL}/api/login`, loginData);
console.log("After axios.post", response);

    return response.data;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};

export const register = async (registerData) => {
  try {
    console.log("Before axios.post");
    const response = await axios.post(`${backendURL}/api/register`, registerData);
    console.log("After axios.post", response);
    return response.data;
  } catch (error) {
    console.error('Error during registration:', error);
    throw error;
  }
};
