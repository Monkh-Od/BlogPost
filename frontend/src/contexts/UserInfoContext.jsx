import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useInput } from "../hooks/useInput";
import axios from "axios";
import Cookies from "js-cookie";

export const UserContext = createContext();

export const UserInfoContext = ({ children }) => {
  const navigate = useNavigate();
  const [email, EmailBind] = useInput("");
  const [password, PasswordBind] = useInput("");
  const [userinfo, setUserInfo] = useState();

  const login = async () => {
    try {
      const { data } = await axios.post("http://localhost:8010/users/login", {
        email: email,
        password: password,
      });
      if (data.match) navigate("/blogposts");
      Cookies.set("owner", data.owner);
      setUserInfo();
    } catch (error) {
      console.log(error);
    }
  }; 

  return (
    <UserContext.Provider
      value={{
        EmailBind: EmailBind,
        email: email,
        owner: userinfo,
        PasswordBind: PasswordBind,
        login: login,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
