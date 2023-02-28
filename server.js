const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const cors = require("cors");
const passport = require("passport");
const cookieSession = require("cookie-session");
const morgan = require("morgan");

const keys = require("./config/keys");

const mongoose = require("mongoose");

const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

mongoose.set("strictQuery", false);
connectDB();

const blog = require("./routes/blog");
require("./Models/User");
require("./services/passport");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/blog", blog);
require("./controllers/user")(app);

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
