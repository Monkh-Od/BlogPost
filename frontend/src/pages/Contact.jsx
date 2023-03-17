import React from "react";
import { Box, Container, Typography } from "@mui/material/";

const style = {
  Container: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "100vh",
    flexDirection: "column",
  },
  Box: {
    display: "flex",
    flexDirection: "row",
    gap: "32px",
  },
};

const Contact = () => {
  return (
    <Box>
      <Container sx={style.Container}>
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: "40px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "inter,sans-serif",
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "#1f243c",
            }}
          >
            Contact Us
          </Typography>
          <Typography
            sx={{
              fontFamily: "inter,sans-serif",
              fontSize: "1.25rem",
              color: "#1f243c",
            }}
          >
            Have any questions? We'd love to hear from you.
          </Typography>
        </Box>
        <Box sx={style.Box}>
          <Box
            sx={{
              width: "338.67px",
              height: "330.89px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <img
              alt="Blue rectangle"
              src="https://images.ctfassets.net/1e6ajr2k4140/1Is3mTWQQCqwchRsBpQQpC/22e5167b513da507dffc7f83216c5dff/divider_press.svg"
            />
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <Typography
                sx={{
                  fontFamily: "inter,sans-serif",
                  fontSize: "1.125rem",
                  fontWeight: "bold",
                  color: "#1f243c",
                }}
              >
                Press
              </Typography>
              <Typography
                sx={{
                  fontFamily: "inter,sans-serif",
                  fontSize: "1.25rem",
                  color: "#1f243c",
                }}
              >
                Are you interested in our latest news or working on a Grammarly
                story and need to get in touch?
              </Typography>
            </Box>
            <button
              style={{
                height: "50px",
                background: "#fff",
                border: "1px solid #0d8065",
                color: "#0d8065",
                borderRadius: "5px",
                padding: "8px 32px",
                fontFamily: "inter,sans-serif",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              Visit Press Page
            </button>
          </Box>
          <Box
            sx={{
              width: "338.67px",
              height: "330.89px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <img
              alt="Green rectangle"
              src="https://images.ctfassets.net/1e6ajr2k4140/5hlTkAmhEgMBeTcvNvacWv/bad4b899fdde1190fa716bec5cab73b8/divider_helpsupport.svg"
            />
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <Typography
                sx={{
                  fontFamily: "inter,sans-serif",
                  fontSize: "1.125rem",
                  fontWeight: "bold",
                  color: "#1f243c",
                }}
              >
                Help & Support
              </Typography>
              <Typography
                sx={{
                  fontFamily: "inter,sans-serif",
                  fontSize: "1.25rem",
                  color: "#1f243c",
                }}
              >
                Our support team is spread across the globe to give you answers
                fast.
              </Typography>
            </Box>
            <button
              style={{
                height: "50px",
                background: "#0d8065",
                border: "1px solid transparent",
                color: "#fff",
                borderRadius: "5px",
                padding: "8px 32px",
                fontFamily: "inter,sans-serif",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              Visit Support Page
            </button>
          </Box>
          <Box
            sx={{
              width: "338.67px",
              height: "330.89px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <img
              alt="Darkblue rectangle"
              src="https://images.ctfassets.net/1e6ajr2k4140/2S6SAFBOcLexFXfyKnuyg2/f0e9ed3d0baef76cba9574c4397a7104/divider_sales.svg"
            />
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <Typography
                sx={{
                  fontFamily: "inter,sans-serif",
                  fontSize: "1.125rem",
                  fontWeight: "bold",
                  color: "#1f243c",
                }}
              >
                Sales
              </Typography>
              <Typography
                sx={{
                  fontFamily: "inter,sans-serif",
                  fontSize: "1.25rem",
                  color: "#1f243c",
                }}
              >
                Get in touch with our sales team to see how we can work
                together.
              </Typography>
            </Box>
            <button
              style={{
                height: "50px",
                background: "#fff",
                border: "1px solid #0d8065",
                color: "#0d8065",
                borderRadius: "5px",
                padding: "8px 32px",
                fontFamily: "inter,sans-serif",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              Contact Sales
            </button>
          </Box>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <img
            src="https://images.ctfassets.net/1e6ajr2k4140/493F5OZOfPv94mmGQ2d2iA/e17747e7b16c526d04f9e984bbc96308/mail.png"
            alt=""
          />
          <Typography
            sx={{
              fontFamily: "inter,sans-serif",
              fontSize: "1.25rem",
              fontWeight: "bold",
              color: "#1f243c",
            }}
          >
            Mailing Address
          </Typography>
          <Box sx={{ fontFamily: "inter,sans-serif", color: "#1f243c" }}>
            <Typography>Pinecone Academy</Typography>
            <Typography>
              Address: 3rd floor Gurvan Gol Office, Chinggis Ave 17, Ulaanbaatar
              14240
            </Typography>
            <Typography>Phone: 7507 7500</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
