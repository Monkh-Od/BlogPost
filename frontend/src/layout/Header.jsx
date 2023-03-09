import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container } from "@mui/system";

const drawerWidth = 240;
const navItems = ["Blogs", "Services", "Contact", "Log in", "Get Access"];

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handler = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box display={"flex"}>
        <Typography
          variant="h6"
          sx={{ my: 2, color: offsetY !== 0 && "black" }}
        >
          team
        </Typography>
        <Box
          sx={{
            width: "7px",
            height: "7px",
            backgroundColor: "#0BBEF2",
            marginTop: "17px",
          }}
        ></Box>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  useEffect(() => {
    const handler = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <Box>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ backgroundColor: offsetY === 0 ? "transparent" : "white" }}
      >
        <Container maxWidth="xl">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "flex" },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color:
                    offsetY !== 0 || location.pathname !== "/"
                      ? "black"
                      : "white",
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigate("/");
                }}
              >
                team
              </Typography>
              <Box
                sx={{
                  width: "7px",
                  height: "7px",
                  backgroundColor:
                    location.pathname !== "/" ? "black" : "#0BBEF2",
                  marginTop: "17px",
                }}
              ></Box>
            </Box>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{
                    color:
                      offsetY !== 0 || location.pathname !== "/"
                        ? "#6D7D8B"
                        : "white",
                    textDecoration: item !== "Get Access" &&"1px #6D7D8B underline",
                    border : item === "Get Access" && "2px solid rgba(77, 160, 253, 0.42)",
                  }}
                  style={{color : item === "Get Access" && "#4DA0FD"}}
                  onClick={() => {
                    item === "Log in" && navigate("/login");
                    item === "Blogs" && navigate("/blogposts");
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
            backgroundColor: "black",
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};
