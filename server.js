const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const cors = require("cors");

const mongoose = require("mongoose");

const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

mongoose.set("strictQuery", false);
connectDB();

const app = express();

app.use(express.json());

app.use(cors());

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
