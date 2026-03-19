require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const cors = require("cors");
const { errors } = require("celebrate");
const expressWinston = require("express-winston");
const winston = require("winston");

const { DB_ADDRESS } = require("./config");
const routes = require("./routes");
const { createUser, login } = require("./controllers/users");
const { validateSignUp, validateSignIn } = require("./utils/validation");
const rateLimiter = require("./middlewares/rateLimiter");
const errorHandler = require("./middlewares/errorHandler");

const app = express();
const PORT = 3000;

mongoose.connect(DB_ADDRESS);

app.use(helmet());
app.use(
  cors({
    origin: ["http://localhost:5173", "https://yourdomain.com"],
  }),
);
app.use(express.json());
app.use(rateLimiter);

app.use(
  expressWinston.logger({
    transports: [new winston.transports.File({ filename: "logs/request.log" })],
    format: winston.format.json(),
  }),
);

app.post("/signup", validateSignUp, createUser);
app.post("/signin", validateSignIn, login);

app.use("/api", routes);

app.use(
  expressWinston.errorLogger({
    transports: [new winston.transports.File({ filename: "logs/error.log" })],
    format: winston.format.json(),
  }),
);

app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
