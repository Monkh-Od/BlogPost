import React from "react";
import { Container, Typography, TextField, Button, Link } from "@mui/material/";
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

const Signin = () => {
  const navigate = useNavigate();
  return (
      <Container maxWidth="sm" sx={style.Container}>
        <Typography variant="h4" color="primary">
          Sign in
        </Typography>
        <TextField label="Email" focused sx={{ mt: 3 }} fullWidth />
        <TextField label="Password" focused sx={{ mt: 3 }} fullWidth />
        <Button variant="contained" size="large" sx={{ mt: 3 }} fullWidth>
          SIGN IN
        </Button>
        <Link sx={{ mt: 3, cursor: "pointer" }} onClick={()=> {navigate("/signup")} }>
          Dont have an account? Click here!
        </Link>
      </Container>
  );
};

export default Signin;
