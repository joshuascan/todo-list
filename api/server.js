const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();

const tasksRouter = require("./tasks/tasks-router");

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/api/tasks", tasksRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "API is up" });
});

server.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ message: err.message, stack: err.stack });
});

module.exports = server;
