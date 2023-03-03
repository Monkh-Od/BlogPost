import {
  Container,
  Typography,
  TextField,
  Button,
  Link,
  FormControlLabel,
  Checkbox,
} from "@mui/material/";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
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

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState("");

  const register = async () => {
    if (password !== check) {
      alert("password is incorrect passaaa shalga zayu");
      return;
    }
    try {
      const rs = await axios.post("http://localhost:8010/users/signup", {
        email: email,
        password: password,
      });
      console.log(rs);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container maxWidth="sm" sx={style.Container}>
      <Typography variant="h4" color="primary">
        Sign up
      </Typography>
      <TextField
        label="Email"
        focused
        sx={{ mt: 3 }}
        fullWidth
        onChange={(el) => {
          setEmail(el.target.value);
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
      <TextField
        label="Password"
        focused
        sx={{ mt: 3 }}
        fullWidth
        onChange={(el) => {
          setCheck(el.target.value);
        }}
      />
      <Button
        variant="contained"
        size="large"
        sx={{ mt: 3 }}
        fullWidth
        onClick={() => {
          register();
        }}
      >
        SIGN UP
      </Button>
      <Link
        to={"/login"}
        sx={{ mt: 3, cursor: "pointer" }}
        onClick={() => navigate("/login")}
      >
        Already have an account? Sign in
      </Link>
      <Typography>Made with ❤️ by Pinecone Academy</Typography>
      <Typography sx={{ opacity: 0.2 }}>©blogpost.io 2023</Typography>
      <FormControlLabel
        control={<Checkbox color="primary" />}
        label="I agree to all Terms of Service and Privacy Policy"
      />
    </Container>
  );
};

export default Signup;
