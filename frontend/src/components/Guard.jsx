import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserInfoContext";

const GuardRoute = ({children}) => {
  const { email } = useContext(UserContext);
  const navigate = useNavigate();
  if (!email) {
    alert("login first");
    navigate("/login");
    return;
  }
  return children;
};

export default GuardRoute;
