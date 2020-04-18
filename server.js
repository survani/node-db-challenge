const express = require("express");
const helmet = require("helmet");

const projectRouter = require("./projectRouter/project-router");

const server = express();

server.use(express.json());
//I will leave all routes from here this will help with limiting the work for this 3 hour sprint time limit.
server.use("/api/projects", projectRouter);

module.exports = server;
