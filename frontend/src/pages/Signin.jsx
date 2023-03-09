import React from "react";
import { Container, Typography, TextField, Button, Link } from "@mui/material/";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useInput } from "../hooks/useInput";

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
  const [email, EmailBind] = useInput("");
  const [password, PasswordBind] = useInput("");
  const login = async () => {
    try {
      const {data} = await axios.post("http://localhost:8010/users/login", {
        email: email,
        password: password,
      });
      if(data.match) navigate("/blogposts")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Container maxWidth="sm" sx={style.Container}>
        <Typography variant="h4" color="primary">
          Sign in
        </Typography>
        <TextField
          label="Email"
          focused
          sx={{ mt: 3 }}
          fullWidth
          {...EmailBind}
        />
        <TextField
          label="Password"
          focused
          sx={{ mt: 3 }}
          fullWidth
          {...PasswordBind}
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
          onClick={() => navigate("/signup")}
        >
          Dont have an account? Click here!
        </Link>
      </Container>
    </div>
  );
};

export default Signin;
