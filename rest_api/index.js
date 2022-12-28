const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");

dotenv.config();
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, () => {
  console.log("Connected to MondoDb");
});

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.get("/", (req, res) => {
  res.send("Welcome to homepage");
});

app.listen(8800, () => {
  console.log("Backend server is ready! ");
});
