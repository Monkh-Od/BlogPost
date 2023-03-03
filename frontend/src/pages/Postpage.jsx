import { Avatar, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Img from "../assets/images/Rectangle.png";

export const Post = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        marginTop: "9vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mb: 4,
      }}
    >
      <Box sx={styles.titlepos}>
        <Typography sx={styles.word}>
          10 secrets for managing a remote team
        </Typography>
        <Box sx={styles.posit}>
          <Avatar src="/static/images/avatar/1.jpg" />
          <Typography>Shedrack eze</Typography>
          <Typography>I</Typography>
          <Typography>2nd January,2022</Typography>
        </Box>
      </Box>
      <img src={Img} alt="" style={styles.img} />
      <Box sx={styles.position}>
        <Typography sx={styles.words}>
          If you’re thinking of starting a blog of your own, but just don’t have
          a clue on what to blog about, then fear not!
        </Typography>
        <Typography sx={styles.words}>
          In this article, I have included a whole load of blog examples from a
          wide variety of different niches, all run on different blogging
          platforms like WordPress, Joomla! and Drupal.
        </Typography>
        <Typography sx={styles.words}>
          Since the beginning of the internet, millions and millions and
          millions of blogs have been created. Many have died due to lost
          interest or their owners giving up on the idea, while others have
          thrived and continue to grow, making money and earning their owners a
          steady income. It’s a constant evolution of content that keeps people
          coming back for more, especially if these blogs contact highly
          resourceful material that people find useful and interesting.
        </Typography>
        <Typography sx={styles.words}>
          Each example listed in this blog post are all different in some way
          and all bring something unique to their readers & subscribers. I want
          to show you what is possible and how you can take inspiration from
          them and create an awesome blog of your own. Some of
        </Typography>
        <Typography sx={styles.words}>
          these blogs make over $100k a month, others are just a hobby for their
          owners, but all have the same purpose at their core… the love of
          writing and sharing information. Some of these blogs make over $100k a
          month, others are just a hobby for their owners, but all have the same
          purpose at their core… the love of writing and Some of these blogs
          make over $100k a month, others are just a hobby for their owners, but
          all have the same purpose at their core… the love of writing and
        </Typography>
        <Box sx={styles.writtnby}>
          <Avatar sx={{ width: "56px", height: "56px" }} />
          <Box>
            <Typography sx={{ fontSize: "14px" }}>Written by</Typography>
            <Typography sx={{ fontSize: "20px" }}>Shedrack Eze</Typography>
            <Typography sx={{ fontSize: "14px", color: "#989898" }}>
              CEO Team App
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={styles.commpos}>
        <Avatar />
        <Box>
          <Typography>Mikuun</Typography>
          <Typography>Me bur aimr huurhuuunnn</Typography>
        </Box>
      </Box>
      <Box sx={styles.comm}>
        <Typography>Join the conversation</Typography>
        <Box display={"flex"}>
          <Avatar />
          <textarea id="w3review" name="w3review" rows="4" cols="30"></textarea>
        </Box>
      </Box>
    </Container>
  );
};

const styles = {
  position: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: {
      xl: "90vh",
    },
  },
  titlepos: {
    display: "flex",
    height: { xl: "20vh", xs: "30vh" },
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  word: {
    width: {
      xl: "50vh",
    },
    fontFamily: "Mukta",
    fontSize: "4vh",
    lineHeight: "6vh",
  },
  posit: {
    display: "flex",
    gap: 2,
    alignItems: "center",
  },
  words: {
    width: "80%",
    fontSize: "2vh",
    fontFamily: "Mulish",
  },
  img: {
    width: "100%",
    height: {
      xl: "auto",
      xs: "40vh",
    },
  },
  comm: {
    display: "flex",
    flexDirection: "column",
  },
  commpos: {
    display: "flex",
    height: "5vh",
  },
  writtnby: {
    height: "10vh",
    width: {
      xl: "50vh",
      xs: "70%",
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Mulish",
  },
};

export default Post;
