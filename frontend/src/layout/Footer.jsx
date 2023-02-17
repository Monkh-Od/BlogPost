import {
  Box,
  Container,
  CssBaseline,
  Grid,
  IconButton,
  Input,
  Typography,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import ArrowRight from "../assets/images/arrow.svg";

export const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#252B3B",
        color: "white",
        padding: "10px",
        width: "100%",
      }}
    >
      <CssBaseline />
      <Container maxWidth="xl">
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "40px",
          }}
        >
          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
            sm={12}
            xl={8}
          >
            <Box sx={styles.flexColumns} width={"30%"}>
              <Box sx={styles.flexRows}>
                <Typography variant="h4" sx={{ color: "#ffffff" }}>
                  team
                </Typography>
                <Box
                  sx={{
                    width: "7px",
                    height: "7px",
                    backgroundColor: "#0BBEF2",
                    marginTop: "17px",
                  }}
                ></Box>
              </Box>
              <Box sx={styles.flexColumns}>
                <Box sx={styles.iconFooters}>
                  <IconButton edge="start" sx={styles.iconColor}>
                    <InstagramIcon />
                  </IconButton>
                  <Typography>instagram</Typography>
                </Box>
                <Box sx={styles.iconFooters}>
                  <IconButton edge="start" sx={styles.iconColor}>
                    <FacebookIcon />
                  </IconButton>
                  <Typography>Facebook</Typography>
                </Box>
                <Box sx={styles.iconFooters}>
                  <IconButton edge="start" sx={styles.iconColor}>
                    <TwitterIcon />
                  </IconButton>
                  <Typography>Twitter</Typography>
                </Box>
                <Box sx={styles.iconFooters}>
                  <IconButton edge="start" sx={styles.iconColor}>
                    <InstagramIcon />
                  </IconButton>
                  <Typography>instagram</Typography>
                </Box>
                <Box sx={styles.iconFooters}>
                  <IconButton edge="start" sx={styles.iconColor}>
                    <FacebookIcon />
                  </IconButton>
                  <Typography>Facebook</Typography>
                </Box>
                <Box sx={styles.iconFooters}>
                  <IconButton edge="start" sx={styles.iconColor}>
                    <TwitterIcon />
                  </IconButton>
                  <Typography>Twitter</Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                width: "60%",
                display: {
                  xl: "flex",
                  lg: "flex",
                  md: "flex",
                  sm: "flex",
                  xs: "none",
                },
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5vh",
                }}
              >
                <Typography>Use cases</Typography>
                <Box sx={styles.flexColumns} gap={2}>
                  <Typography>UI Design</Typography>
                  <Typography>UX Design</Typography>
                  <Typography>Prototyping</Typography>
                  <Typography>UI Design</Typography>
                  <Typography>UX Design</Typography>
                  <Typography>Prototyping</Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5vh",
                }}
              >
                <Typography>Explore</Typography>
                <Box sx={styles.flexColumns} gap={2}>
                  <Typography>Figma</Typography>
                  <Typography>Customers</Typography>
                  <Typography>Why I Love Figma</Typography>
                  <Typography>Figma</Typography>
                  <Typography>Customers</Typography>
                  <Typography>Why I Love Figma</Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5vh",
                }}
              >
                <Typography>Resources</Typography>
                <Box sx={styles.flexColumns} gap={2}>
                  <Typography>Community Resources Hub</Typography>
                  <Typography>Support</Typography>
                  <Typography>Education</Typography>
                  <Typography>Community Resources Hub</Typography>
                  <Typography>Support</Typography>
                  <Typography>Education</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            sm={12}
            xl={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography fontSize={"18px"}>
              Subscribe to our newsletter
            </Typography>
            <Box sx={styles.flexRows}>
              <Input
                placeholder="Email"
                disableUnderline={true}
                sx={{
                  width: "300px",
                  height: "56px",
                  background: "#FFFFFF",
                }}
              />
              <img
                src={ArrowRight}
                alt="arrowRight"
                style={{ marginLeft: "-14%", zIndex: 1 }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
const styles = {
  flexRows: {
    display: "flex",
  },
  iconFooters: {
    display: "flex",
    alignItems: "center",
    color: "#FFFFFF",
  },
  iconColor: { color: "#FFFFFF" },
  flexColumns: {
    display: "flex",
    flexDirection: "column",
  },
};
