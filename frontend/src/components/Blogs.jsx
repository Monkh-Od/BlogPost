import {
  Typography,
  CardContent,
  CardMedia,
  Card,
  CardActions
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Blogs = ({ image, text, title, owner, date, id }) => {
  const navigate = useNavigate();
  return (
    <Card
      sx={{ maxWidth: 345, cursor: "pointer", borderRadius:"15px", padding: 2 }}
      onClick={() => navigate(`/blogposts/${id}`)}
    >
      <CardMedia sx={{ height: 140 }} image={image} title="post image" />
      <CardContent
        sx={{
          height: 200,
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="#25313C">
          {text}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          height: 30,
        }}
      >
        <Typography>{owner}</Typography>
        <Typography>I</Typography>
        <Typography>{date}</Typography>
      </CardActions>
    </Card>
  );
};

export default Blogs;
