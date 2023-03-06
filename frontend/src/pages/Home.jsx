import CoverPage from "../components/cover";
import Midposts from "../components/midposts";
import Review from "../components/review";

export const HomePage = () => {
  return (
    <>
      <CoverPage />
      <Midposts image="post1img.svg" />
      <Midposts isInverted={true} image="post2img.png" />
      <Midposts image="post3img.png" spaced={true} />
      <Review />
    </>
  );
};

export default HomePage;
