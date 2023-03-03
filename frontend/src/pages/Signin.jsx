import React, { useState } from "react";
import { Container, Typography, TextField, Button, Link } from "@mui/material/";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const style = {
  Container: {
    display: "flex",
    alignItems: "center",
    height: "100vh",
    justifyContent: "center",
    flexDirection: "column",
  },
};

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = async () => {
    try {
      const response = await axios.post("http://localhost:8010/users/login", {
        email: email,
        password: password,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Container maxWidth="sm" sx={style.Container}>
      <Typography variant="h4" color="primary">
        Sign in
      </Typography>
      <TextField
        label="Email"
        focused
        sx={{ mt: 3 }}
        fullWidth
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <TextField
        label="Password"
        focused
        sx={{ mt: 3 }}
        fullWidth
        onChange={(el) => {
          setPassword(el.target.value);
        }}
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
        sx={{ mt: 3, cursor: "pointer" }}
        onClick={() => {
          navigate("/signup");
        }}
      >
        Dont have an account? Click here!
      </Link>
    </Container>
  );
};

export default Signin;
