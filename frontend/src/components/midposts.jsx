import { Typography, Box, Link, Container, Grid } from "@mui/material";
import React from "react";

const Midposts = ({ isInverted = false, image, spaced = false }) => {
  return (
    <Box height="1000px" display="flex" justifyContent="space-between">
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          height: "100%",
          alignItems: { md: "center", xs: "flex-start" },
          pt: { md: 0, xs: 10 },
        }}
      >
        <Grid
          container
          spacing={{ md: 50, xs: 0 }}
          sx={{
            display: "flex",
            flexDirection: isInverted ? "row-reverse" : "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item md={6} xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { md: "flex-start", xs: "center" },
              }}
            >
              <Typography
                variant="h3"
                fontWeight="800"
                maxWidth="400px"
                sx={{ mb: 3 }}
              >
                Your Hub for teamwork
              </Typography>
              <Typography
                variant="body1"
                maxWidth="410px"
                sx={{
                  mb: 3,
                }}
              >
                Give everyone you work with—inside and outside your company—a
                more productive way to stay in sync. Respond faster with emoji,
                keep conversations focused in channels, and simplify all your
                communication into one place.
              </Typography>
              <Link href="#" fontWeight="700">
                Learn more
              </Link>
            </Box>
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
            sx={{
              display: "flex",
              alignItems: { md: "center", xs: "flex-start" },
              justifyContent: { md: "flex-start", xs: "center" },
            }}
          >
            <Box
              sx={{
                width: {
                  xl: spaced ? "100%" : "35%",
                  md: spaced ? "100%" : "50%",
                  sm: "60%",
                  xs: "80%",
                },
                position: spaced ? "relative" : "absolute",
                right: isInverted ? "auto" : { md: 0, xs: "auto" },
                left: isInverted ? { md: 0, xs: "auto" } : "auto",
                pt: { md: 0, xs: 10 },
              }}
            >
              <img
                src={image}
                alt="post1"
                style={{
                  width: "100%",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Midposts;
