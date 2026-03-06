const express = require("express");

module.exports = function(app) {
  // Example route
  const genres = require("../routes/genres");
  app.use("/api/genres", genres);

  // You can add other routes similarly
};