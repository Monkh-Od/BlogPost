import React, { useState } from "react";
import axios from "axios";
import { useInput } from "../hooks/useInput";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Link,
  FormControlLabel,
  Checkbox,
  InputAdornment,
  IconButton,
} from "@mui/material/";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const style = {
  Container: {
    display: "flex",
    alignItems: "center",
    height: "100vh",
    justifyContent: "center",
    flexDirection: "column",
  },
};

export const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useInput("");
  const [password1, setPassword1] = useState();
  const [password2, setPassword2] = useState();
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const register = async () => {
    if (password1 !== password2) {
      alert("password is incorrect");
      return;
    }
    try {
      const { data } = await axios.post("http://localhost:8010/users/signup", {
        email: email,
        password: password1,
      });
      if (data) navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Box>
        <Container maxWidth="sm" sx={style.Container}>
          <Typography variant="h4" color="primary">
            Sign up
          </Typography>
          <TextField
            type={"email"}
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
            type={showPassword1 ? "text" : "password"}
            sx={{ mt: 3 }}
            fullWidth
            onChange={(e) => {
              setPassword1(e.target.value);
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword1(!showPassword1)}
                    onMouseDown={() => setShowPassword1(!showPassword1)}
                  >
                    {showPassword1 ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Password"
            focused
            type={showPassword2 ? "text" : "password"}
            sx={{ mt: 3 }}
            fullWidth
            onChange={(e) => {
              setPassword2(e.target.value);
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword2(!showPassword2)}
                    onMouseDown={() => setShowPassword2(!showPassword2)}
                  >
                    {showPassword2 ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <FormControlLabel
            sx={{ width: "100%", textAlign: "left", mt: 1 }}
            control={<Checkbox color="primary" />}
            label="I agree to all Terms of Service and Privacy Policy"
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
            sx={{ mt: 3, width: "100%", textAlign: "right" }}
            onClick={() => navigate("/login")}
          >
            Already have an account? Sign in
          </Link>
        </Container>
      </Box>
    </div>
  );
};
