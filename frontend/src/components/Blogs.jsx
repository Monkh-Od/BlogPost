import {
  Avatar,
  Typography,
  CardContent,
  CardMedia,
  Card,
  Divider,
  CardActionArea,
} from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

const Blogs = ({ image, text, title, owner, date, avatarImage, id }) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345, height: 400 }} onClick={() => navigate(id)}>
      <CardActionArea
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <CardMedia sx={{ height: 140 }} image={image} title="post image" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="#25313C">
              {text}
            </Typography>
          </CardContent>
        </Box>
        <Box sx={{ width: "100%" }}>
          <CardContent sx={{ display: "flex", alignItems: "center" }}>
            <Avatar src={avatarImage} alt="user" />
            <Typography>{owner}</Typography>
            <Divider
              orientation="vertical"
              flexItem
              variant="middle"
              sx={{ m: 1 }}
            />
            <Typography>{date}</Typography>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default Blogs;
