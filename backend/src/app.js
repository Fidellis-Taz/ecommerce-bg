const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const env = require("dotenv");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
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
      useCreateIndex: true,
    }
  )
  .then(() => {
    console.log("db connected");
  });

/* routes */
app.use("/api", userRoutes);

/* port */
app.listen(process.env.PORT, () => {
  console.log("server is running ");
});
