import React, { useContext } from "react";
import { Container, Typography, TextField, Button } from "@mui/material/";
import { Link, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useInput } from "../hooks/useInput";
import { ColorModeContext } from "../contexts/themeContext";
import Cookies from "js-cookie";
import { AuthContext } from "../contexts/AuthContext";

const style = {
  Container: {
    display: "flex",
    alignItems: "center",
    height: "100vh",
    justifyContent: "center",
    flexDirection: "column",
  },
};

export const Signin = () => {
  const navigate = useNavigate();
  const { color } = useContext(ColorModeContext);
  const [email, EmailBind] = useInput("");
  const [password, PasswordBind] = useInput("");
  const { setCurrentUser } = useContext(AuthContext);

  const login = async () => {
    try {
      const { data } = await axios.post("http://localhost:8010/users/login", {
        email: email,
        password: password,
      });

      Cookies.set("token", data.token);
      Cookies.set("email", data.email);
      Cookies.set("owner", data.owner)
      setCurrentUser(data.email);

      if (data.match) navigate("/blogposts");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: color === "dark" ? "white" : "black",
        color: color === "dark" ? "black" : "white",
      }}
    >
      <Container maxWidth="sm" sx={style.Container}>
        <Typography variant="h4">Sign in</Typography>
        <TextField
          label="Email"
          focused
          sx={{ mt: 3, input: { color: color === "dark" ? "black" : "white" } }}
          fullWidth
          {...EmailBind}  
        />
        <TextField
          label="Password"
          focused
          sx={{ mt: 3, input: { color: color === "dark" ? "black" : "white" } }}
          {...PasswordBind}
          fullWidth
        />
        <Button
          variant="contained"
          size="large"
          sx={{ mt: 3 }}
          onClick={() => login()}
          fullWidth
        >
          SIGN IN
        </Button>
        <Link
          sx={{ width: "100%", textAlign: "left", mt: 3, cursor: "pointer" }}
          onClick={() => navigate("/signup")}
        >
          Dont have an account? Click here!
        </Link>
      </Container>
    </Box>
  );
};
