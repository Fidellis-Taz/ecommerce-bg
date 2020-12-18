const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const env = require("dotenv");
const mongoose = require("mongoose");
/* environment variable */
env.config();

/* middleware */
app.use(bodyParser()); //more like express.json middleware

/* db connection */
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.cz7rv.mongodb.net/${process.env.MONGO_DB_DATABSE}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("db connected");
  });

app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "helloee from server ",
  });
});
app.get("/data", (req, res, next) => {
  res.status(200).json({
    message: res.body,
  });
});

app.listen(process.env.PORT, () => {
  console.log("server is running ");
});
