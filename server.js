const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");

cookieParser = require("cookie-parser");

const mongoose = require("mongoose");
const errorHandler = require("./middlewares/error");

const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

const blog = require("./routes/blog");
const auth = require("./routes/auth");

const app = express();

mongoose.set("strictQuery", false);
connectDB();

app.use(express.json());
app.use(cookieParser());

app.use(cors());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/blog", blog);
app.use("/api/auth", auth);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.bgRed.bold
  )
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.yellow);

  server.close(() => process.exit(1));
});
