const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
app.use(cors());

//creating Route
const userRoute = require("./routes/userRoute");

try {
  mongoose.connect(process.env.URI, {
    useNewUrlParser: true,
  });
  console.log("DataBase Connected Successfully!");
  app.listen(process.env.PORT, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Server Connected Successfully on port:", process.env.PORT);
    }
  });
} catch (error) {
  console.log(error);
}

app.use(userRoute);
