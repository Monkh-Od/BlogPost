import { Box, Button } from "@mui/material";
import { Menu, MenuItem } from "@mui/material";
import Cookies from "js-cookie";
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts";

const navItems = ["Blogs", "Services", "Contact", "Log in", "Get Access"];

export const Texts = () => {
  const [offsetY] = useState(0);
  const { currentuser, setCurrentUser } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = () => {
    setCurrentUser(null);
    Cookies.remove("token");
    Cookies.remove("email");
    navigate("/login");
  };

  return (
    <Box sx={{ display: { xs: "none", sm: "flex" } }}>
      {navItems.map((item) => (
        <Box key={item}>
          <Button
            sx={{
              color:
                offsetY !== 0 || location.pathname !== "/"
                  ? "#6D7D8B"
                  : "white",
              textDecoration: item !== "Get Access" && "1px #6D7D8B underline",
              border:
                item === "Get Access" && "2px solid rgba(77, 160, 253, 0.42)",
            }}
            style={{ color: item === "Get Access" && "#4DA0FD" }}
            onClick={(e) => {
              if (item === "Log in" && currentuser) {
                handleClick(e);
                return;
              }
              item === "Log in" && navigate("/login");
              item === "Blogs" && navigate("/blogposts");
            }}
          >
            {item === "Log in" && currentuser ? currentuser : item}
          </Button>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem onClick={logOut}>Logout</MenuItem>
          </Menu>
        </Box>
      ))}
    </Box>
  );
};
