import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts";

const GuardRoute = ({children}) => {
  const {currentuser} = useContext(AuthContext)
  const navigate = useNavigate();
  if (!currentuser) {
    alert("login first");
    navigate("/login");
    return;
  }
  return children;
};

export default GuardRoute;
