import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Blogs = ({ image, text, title, owner, date, avatarImage }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={image} title="post image" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="#25313C">
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <img src={avatarImage} alt="user"/>
        <Typography>{owner}</Typography>
        <Typography>I</Typography>
        <Typography>{date}</Typography>
      </CardActions>
    </Card>
  );
};

export default Blogs;
