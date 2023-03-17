import CoverPage from "../components/cover";
import Midposts from "../components/midposts";
import Review from "../components/review";
import { useContext } from "react";
import { ColorModeContext } from "../contexts/themeContext";

export const HomePage = () => {
  const { color } = useContext(ColorModeContext);
  return (
    <div
      style={{
        backgroundColor: color === "dark" ? "white" : "black",
        color: color === "dark" ? "black" : "white",
      }}
    >
      <CoverPage />
      <Midposts image="post1img.svg" />
      <Midposts isInverted={true} image="post2img.png" />
      <Midposts image="post3img.png" spaced={true} />
      <Review />
    </div>
  );
};

