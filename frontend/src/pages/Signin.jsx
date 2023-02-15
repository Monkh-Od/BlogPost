import React from "react";
import { Container, Typography, TextField, Button, Link } from "@mui/material/";

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
  return (
    <div>
      <Container maxWidth="sm" sx={style.Container}>
        <Typography variant="h4" color="primary">
          Sign in
        </Typography>
        <TextField label="Email" focused sx={{ mt: 3 }} fullWidth />
        <TextField label="Password" focused sx={{ mt: 3 }} fullWidth />
        <Button variant="contained" size="large" sx={{ mt: 3 }} fullWidth>
          SIGN IN
        </Button>
        <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" sx={{ mt: 3 }}>
          Dont have an account? Click here!
        </Link>
      </Container>
    </div>
  );
};

export default Signin;
