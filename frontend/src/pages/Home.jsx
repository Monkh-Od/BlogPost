import CoverPage from "../components/cover";
import Midposts from "../components/midposts";

export const HomePage = () => {
  return (
    <>
      <CoverPage />
      <Midposts image="post1img.svg" />
      <Midposts isInverted={true} image="post2img.png" />
      <Midposts image="post3img.png" spaced={true} />
    </>
  );
};

export default HomePage;
