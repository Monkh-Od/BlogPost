import { Typography, Box, Container, Rating, Avatar } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Review = () => {
  const cardDetail = [
    {
      text: "Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place.",
      picture: "pfp1.png",
      name: "Amy Klassen",
    },
    {
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      picture: "pfp2.png",
      name: "Jane Cooper",
    },
    {
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      picture: "pfp3.png",
      name: "Eleanor Pena",
    },
    {
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      picture: "pfp4.png",
      name: "Among Us",
    },
    {
      text: "I learnt a lot about murdering and how to get away from cops. It was very educational to know those kind of stuff, and it helped me a lot!",
      picture: "pfp5.png",
      name: "Disney Official",
    },
    {
      text: "This website is way better than our website! I love the design, especially the part Onis made. I got so much inspiration from this website!",
      picture: "pfp6.png",
      name: "Official Pixar",
    },
    {
      text: "We got to hire the person who made this website. ESPECIALLY the person who is called Onis, he is so talented and very intelligent. But we do not want to hire Taivnaa.",
      picture: "pfp7.png",
      name: "Elon Musk",
    },
  ];

  return (
    <Box sx={style.out}>
      <Container maxWidth="xl">
        <Typography variant="h2" sx={style.title}>
          What poeple say about us
        </Typography>
        <Box sx={style.cardsContainer}>
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            breakpoints={{
              600: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              850: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1200: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1300: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            navigation={true}
            loop={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {cardDetail.map((number, index) => {
              return (
                <SwiperSlide key={index}>
                  <Box sx={style.cardContainer}>
                    <Box sx={style.card}>
                      <Box>
                        <Rating
                          name="read-only"
                          value={5}
                          readOnly
                          sx={style.ratingPC}
                        />
                        <Rating
                          name="read-only"
                          value={5}
                          readOnly
                          size="small"
                          sx={style.ratingMobile}
                        />

                        <br />
                        <Typography variant="body1" sx={style.comment}>
                          {number.text}
                        </Typography>
                      </Box>
                      <Box sx={style.profile}>
                        <Avatar
                          alt="Remy Sharp"
                          sx={style.pfp}
                          src={number.picture}
                        />
                        <Typography variant="h6" sx={style.username}>
                          {number.name}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};

const style = {
  out: {
    height: "900px",
  },
  title: {
    textAlign: "center",
    fontWeight: 800,
  },
  cardContainer: {
    height: "600px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cardsContainer: {
    mt: 15,
    display: "flex",
  },
  card: {
    height: { lg: "400px", sm: "270px", xs: "300px" },
    width: { lg: "400px", sm: "270px", xs: "300px" },
    boxShadow: "0px 15px 35px rgba(0, 0, 0, 0.25)",
    p: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  ratingPC: {
    display: {
      sm: "flex",
      xs: "none",
    },
  },
  ratingMobile: {
    display: {
      sm: "none",
      xs: "flex",
    },
  },
  comment: {
    fontSize: { lg: "24px", sm: "10px", xs: "16px" },
  },
  pfp: {
    width: { lg: 56, sm: 40, xs: 24 },
    height: { lg: 56, sm: 40, xs: 24 },
    mb: { sm: 3, xs: 0 },
  },
  profile: {
    display: "flex",
  },
  username: {
    ml: 2,
    mt: 1,
    fontSize: { lg: "24px", sm: "10px", xs: "16px" },
  },
};

export default Review;
