import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchUserProfile, fetchUserStats } from "@/api/userService";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userStats, setUserStats] = useState(null); // New state for user stats

  useEffect(() => {
    const localUser = window.localStorage.getItem("user");
    const localUserStats = window.localStorage.getItem("userStats"); 
  
    console.log("localUserStatslocalUserStats",localUserStats)
    if (localUserStats) {
      setUserStats(JSON.parse(localUserStats)); 
    }
  
    if (localUser) {
      setUser(JSON.parse(localUser));
      refreshProfileStats(JSON.parse(localUser).username);
    } else {
      setUser(undefined);
    }
  }, []);
  

  const login = async (username) => {
    try {
      const profile = await fetchUserProfile(username);
      if (profile) {
        await refreshProfileStats(profile);
      }
      window.localStorage.setItem("user", JSON.stringify(profile));
      setUser(profile);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = () => {
    window.localStorage.removeItem("user");
    setUser(null);
    setUserStats(null); 
  };

  const isLoggedIn = () => !!user;
  const currentUser = () => user;

  const refreshProfileStats = async (username) => {
    const userToFetch = username || (user && user.username);
    console.log("refreshProfileStats!!!!!!!!!")
    if (userToFetch) {
      console.log("AAAAAAAAAAArefreshProfileStats!!!!!!!!!")
      try {
        const updatedStats = await fetchUserStats(userToFetch);
        setUserStats(updatedStats);
        console.log(userStats)
        window.localStorage.setItem("userStats", JSON.stringify(updatedStats)); // Optionally save stats in localStorage
      } catch (err) {
        console.error("Error refreshing profile stats:", err);
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn,
        currentUser: user,
        currentUserStats: userStats,
        login,
        logout,
        refreshProfileStats,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
