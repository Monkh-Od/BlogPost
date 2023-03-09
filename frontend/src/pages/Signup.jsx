import React from "react";
import axios from "axios";
import { useInput } from "../hooks/useInput";
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
  const navigate = useNavigate()
  const [email, BindEmail] = useInput("");
  const [password, BindPassword] = useInput("");
  const [check, BindCheck] = useInput("");

  const register = async () => {
    if (password !== check) {
      alert("password is incorrect");
      return;
    }
    try {
      const {data} = await axios.post("http://localhost:8010/users/signup", {
        email: email,
        password: password,
      });
      if(data) navigate("/login")
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Container maxWidth="sm" sx={style.Container}>
        <Typography variant="h4" color="primary">
          Sign up
        </Typography>
        <TextField
          label="Email"
          focused
          sx={{ mt: 3 }}
          fullWidth
          {...BindEmail}
        />
        <TextField
          label="Password"
          focused
          sx={{ mt: 3 }}
          fullWidth
          {...BindPassword}
        />
        <TextField
          label="Password"
          focused
          sx={{ mt: 3 }}
          fullWidth
          {...BindCheck}
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
        <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" sx={{ mt: 3 }}>
          Already have an account? Sign in
        </Link>
        <Typography>Made with ❤️ by Pinecone Academy</Typography>
        <Typography sx={{ opacity: 0.2 }}>©blogpost.io 2023</Typography>
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label="I agree to all Terms of Service and Privacy Policy"
        />
      </Container>
    </div>
  );
};

export default Signup;
