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
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 240;
const navItems = ["Products", "Services", "Contact", "Log in", "Get Access"];

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [offsetY, setOffsetY] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box display={"flex"}>
        <Typography variant="h6" sx={{ my: 2 }}>
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


  console.log(location);

  useEffect(() => {
    const handler = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  console.log(offsetY);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
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
            <Typography variant="h5">team</Typography>
            <Box
              sx={{
                width: "7px",
                height: "7px",
                backgroundColor: "#0BBEF2",
                marginTop: "17px",
              }}
            ></Box>
          </Box>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
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
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};
