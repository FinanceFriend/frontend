import axios from "axios";

export const login = async (loginData) => {
  try {
    console.log("Before axios.post");
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/login`,
      loginData
    );
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

export const updateUserStats = async (username, statsUpdates) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/stats/${username}`;

    const response = await axios.put(url, statsUpdates);

    console.log(response);

    if (response.data.success) {
      return response.data.updatedStats;
    } else {
      throw new Error("User stats update was unsuccessful");
    }
  } catch (error) {
    console.error("Error updating user stats:", error);
    throw error;
  }
};

export const updateUserInfo = async (username, userData) => {
  try {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/user/${username}`,
      userData
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
