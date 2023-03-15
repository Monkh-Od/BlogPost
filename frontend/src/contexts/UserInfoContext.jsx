import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useInput } from "../hooks/useInput";
import axios from "axios";

export const UserContext = createContext();

const UserInfoContext = ({ children }) => {
  const navigate = useNavigate();
  const [email, EmailBind] = useInput("");
  const [password, PasswordBind] = useInput("");
  const [userinfo, setUserInfo] = useState(null);

  const login = async () => {
    try {
      const { data } = await axios.post("http://localhost:8010/users/login", {
        email: email,
        password: password,
      });
      if (data.match) navigate("/blogposts");
      setUserInfo(data.owner);
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

export default UserInfoContext;
