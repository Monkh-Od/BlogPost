import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
export const AuthContext = createContext();

function AuthProvider(props) {
  const { children } = props;
  const [currentuser, setCurrentUser] = useState();

  axios.interceptors.request.use(
    function (config) {
      const token = Cookies.get("token");
      config.headers.token = token;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  useEffect(() => {
    setCurrentUser(Cookies.get("email"));
  }, []);

  return (
    <AuthContext.Provider value={{ currentuser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;
