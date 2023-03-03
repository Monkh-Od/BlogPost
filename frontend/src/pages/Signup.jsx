import React from "react";
import { Container, Typography, TextField, Button, Link, FormControlLabel, Checkbox } from "@mui/material/";
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
  return (
      <Container maxWidth="sm" sx={style.Container}>
        <Typography variant="h4" color="primary">
          Sign up
        </Typography>
        <TextField label="Email" focused sx={{ mt: 3 }} fullWidth />
        <TextField label="Password" focused sx={{ mt: 3 }} fullWidth />
        <TextField label="Password" focused sx={{ mt: 3 }} fullWidth />
        <Button variant="contained" size="large" sx={{ mt: 3 }} fullWidth>
          SIGN UP
        </Button>
        <Link to={"/login"} sx={{ mt: 3, cursor:"pointer" }} onClick={()=> navigate("/login")}>
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
