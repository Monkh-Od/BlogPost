import {
  Box,
  Button,
  TextField,
  Typography,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { Container } from "@mui/system";
import Coverimage from "../assets/images/home-background.png";

export const CoverPage = () => {
  const button = createTheme({
    palette: {
      primary: { main: "#4da6ff" },
    },
  });

  return (
    <Box sx={styles.coverbgimage}>
      <Container maxWidth="xl">
        <Box sx={styles.covertextposition}>
          <Box>
            <Typography sx={styles.Bigtexts}>
              Instant collaborations for remote teams
            </Typography>
            <Typography sx={styles.texts}>
              All in one for your remote team chats, collaboration and track
              projects
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            flexDirection: {
              xl: "none",
              xs: "column",
            },
          }}
        >
          <TextField sx={styles.input} placeholder="Email" variant="outlined" />
          <ThemeProvider theme={button}>
            <Button variant="contained" color="primary" sx={styles.button}>
              Get early access
            </Button>
          </ThemeProvider>
        </Box>
      </Container>
    </Box>
  );
};

const styles = {
  coverbgimage: {
    backgroundImage: `url(${Coverimage})`,
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: "flex",
    alignItems: "center",
  },
  covertextposition: {
    display: "flex",
    flexDirection: "column",
    height: "40%",
  },

  Bigtexts: {
    fontFamily: "Work Sans",
    lineHeight: {
      xl: "50px",
      xs: "40px",
    },
    fontSize: {
      xl: "5vh",
      xs: "3vh",
    },
    width: {
      xl: "40%",
    },
    height: "20%",
    color: "#ffffff",
  },

  texts: {
    margin: "2% 0px 5% 0px",
    fontSize: {
      xl: "20px",
    },
    width: {
      lg: "40%",
    },
    fontFamily: "Mulish",
    color: "#ffffff",
  },

  button: {
    color: "#fff",
    fontSize: {
      xl: "15px",
      xs: "13px",
    },
    height: 56,
    width: { xl: "10vw" },
    borderRadius: "10px",
  },
  input: {
    width: {
      xl: 400,
      xs: 280,
    },
    height: {
      xl: "auto",
    },
    gap: 2,
    color: "#a6a6a6",
    borderRadius: 2,
    backgroundColor: "white",
    mr: 3,
  },
};
export default CoverPage;
