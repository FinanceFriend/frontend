import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchUserProfile } from "@/api/user";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const localUser = window.localStorage.getItem("user");
    console.log(user)
    if (localUser) {
      setUser(JSON.parse(localUser));
    }
  }, []);

  const login = async (user) => {
    try {
      const profile = await fetchUserProfile(user);
      window.localStorage.setItem("user", JSON.stringify(profile)); // Serialize to JSON string
      setUser(profile);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = () => {
    window.localStorage.removeItem("user");
    setUser(null);
  };

  const isLoggedIn = () => !!user;
  const currentUser = () => user;

  return (
    <AuthContext.Provider
      value={{ user, isLoggedIn, currentUser: user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
