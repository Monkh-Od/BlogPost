import React from "react";
import { Avatar, Box, Button } from "@mui/material";
import { Container, Grid, Typography } from "@mui/material";

const numbrs = [
  {
    names: "Strategy",
  },
  {
    names: "Branding",
  },
  {
    names: "Development",
  },
  {
    names: "Web Design",
  },
  {
    names: "Social Media",
  },
  {
    names: "Ecommerce",
  },
];

export const Service = () => {
  return (
    <Container sx={styles.trasition} maxWidth="lg">
      <Box>
        <Typography
          sx={{ fontSize: "2.25em", fontFamily: "Montserrat,sans-serif" }}
        >
          Our Services
        </Typography>
        <Typography gap={5}>
          Consectetur adipiscing elit nullam nunc justo sagittis suscipit
          ultrices
        </Typography>
      </Box>
      <Box sx={styles.container}>
        <Grid container spacing={4}>
          {numbrs.map((el) => (
            <Grid item xs={12} xl={4} lg={4} md={4} sm={6} sx={styles.position}>
              <Avatar
                sx={{ backgroundColor: "#38d2d9", height: "7vh", width: "7vh" }}
              />
              <Typography sx={{ fontFamily: "Mukta", fontSize: "1.25em" }}>
                {el.names}
              </Typography>
              <Typography sx={{ fontFamily: "Mulish", fontWeight: "300" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit explicabo aperiam eligendi a, porro sunt ea in
                iure
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Button sx={{ backgroundColor: "transparent !important" }}>
        Learn More
      </Button>
    </Container>
  );
};

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "auto auto auto auto auto auto",
  },
  trasition: {
    padding: "15vh",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
    height: {
      lg: "110vh",
      xs: "120%",
    },
  },
  users: {
    display: "flex",
    alignItems: "center",
    fontFamily: " Work Sans",
    flexDirection: "column",
    height: {
      lg: "15vh",
      xs: "5vh",
    },
    width: {
      lg: "20vh",
    },
  },

  position: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: 2,
  },
};
