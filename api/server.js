const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const { restricted } = require("./auth/auth-middleware");

const server = express();

const tasksRouter = require("./tasks/tasks-router");
const authRouter = require("./auth/auth-router");

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/tasks", restricted, tasksRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "API is up" });
});

server.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ message: err.message, stack: err.stack });
});

module.exports = server;
