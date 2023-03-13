import { AppBar, Box, CssBaseline, Divider, Drawer } from "@mui/material";
import { List, ListItemButton, ListItemText } from "@mui/material";
import { Toolbar, Typography, IconButton, ListItem } from "@mui/material";
import { Switch, Container, FormControlLabel } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Texts } from "./HeaderText";
import styled from "@emotion/styled";
import { ColorModeContext } from "../contexts";

const drawerWidth = 240;
const navItems = ["Blogs", "Services", "Contact", "Log in", "Get Access"];

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

export const Header = () => {
  const { color, changeTheme } = useContext(ColorModeContext);
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
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
      }}
    >
      <Box display={"flex"} justifyContent={"center"}>
        <Typography variant="h6" sx={{ my: 2 }}>
          team
        </Typography>
        <Box
          sx={{
            width: "7px",
            height: "7px",
            backgroundColor: "#0BBEF2",
            marginTop: "32px",
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
        <ListItem sx={{ justifyContent: "center" }}>
          <FormControlLabel
            control={
              <MaterialUISwitch
                sx={{ m: 1 }}
                defaultChecked
                // checked={theme || color === "white" ? true : false}
                onChange={() => {
                  changeTheme();
                }}
              />
            }
          />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor:
            offsetY === 0
              ? "transparent"
              : color === "dark"
              ? "white"
              : "black",
        }}
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
              <MenuIcon sx={{ color: color === "dark" ? "black" : "white" }} />
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
                      ? color === "dark"
                        ? "black"
                        : "white"
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
                  backgroundColor: color === "dark" ? "#0BBEF2" : "white",
                  marginTop: "17px",
                }}
              ></Box>
            </Box>
            <Texts />
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          onClose={handleDrawerToggle}
          open={mobileOpen}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: color === "dark" ? "white" : "black",
              color: color === "dark" ? "black" : "white",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};
