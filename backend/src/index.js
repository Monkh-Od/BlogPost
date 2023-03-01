const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./router/userRouter");
const connect = require("./database");
const postRouter = require("./router/postRouter");
const commentRouter = require("./router/commentRouter");

require("dotenv").config();

const port = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter)
connect();

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
