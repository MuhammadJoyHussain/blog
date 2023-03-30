const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");

const cookieParser = require("cookie-parser");

const errorHandler = require("./middlewares/error");

const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

const blog = require("./routes/blog");
const auth = require("./routes/auth");
const upload = require("./routes/upload");
require("./services/cache");

connectDB();

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/blog", blog);
app.use("/api/auth", auth);
app.use("/api/upload", upload);

if (!process.env.NODE_ENV === "production") {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

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
