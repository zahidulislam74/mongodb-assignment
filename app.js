const { readdirSync } = require("fs");
const express = require("express");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const mongoose = require("mongoose");
const { PORT, DATABASE } = process.env;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));

readdirSync("./routers").map((r) =>
  app.use("/api/v1", require(`./routers/${r}`))
);

module.exports = { PORT, DATABASE, mongoose, app };
