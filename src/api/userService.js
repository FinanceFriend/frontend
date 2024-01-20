import axios from "axios";

export const login = async (loginData) => {
  try {
    console.log("Before axios.post");
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/login`, loginData);
    console.log("After axios.post", response);

    return response.data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

export const register = async (registerData) => {
  try {
    console.log("Before axios.post");
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/register`,
      registerData
    );
    console.log("After axios.post", response);
    return response.data;
  } catch (error) {
    console.error("Error during registration:", error);
    throw error;
  }
};

export const fetchUserProfile = async (username) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/user/${username}`
    );
    console.log(response);
    if (response.data.success) {
      return response.data.user;
    } else {
      throw new Error("User profile fetch was unsuccessful");
    }
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
};

export const fetchUserStats = async (username) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/stats/${username}`
    );
    console.log(response);
    if (response.data.success) {
      return response.data.statsResponse;
    } else {
      throw new Error("User profile fetch was unsuccessful");
    }
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
};
