const winston = require("winston");
const express = require("express");
const config = require("config");

const app = express();

// Startup modules
require("./startup/logging")();
require("./startup/cors")(app);
require("./startup/routes")(app);
require("./startup/db")();       // Reads process.env.MONGODB_URI
require("./startup/config")();
require("./startup/validation")();

// Use Render's PORT or fallback to 3000 locally
const port = process.env.PORT || 3000;
const server = app.listen(port, () =>
  winston.info(`Listening on port ${port}...`)
);

module.exports = server;