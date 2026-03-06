const express = require("express");

module.exports = function(app) {
  // Register all API routes
  app.use("/api/genres", require("../routes/genres"));
  app.use("/api/customers", require("../routes/customers"));
  app.use("/api/movies", require("../routes/movies"));
  app.use("/api/rentals", require("../routes/rentals"));
  app.use("/api/users", require("../routes/users"));
  app.use("/api/auth", require("../routes/auth"));
  app.use("/api/returns", require("../routes/returns"));
  
  // Health check endpoint (useful for Render)
  app.get("/health", (req, res) => {
    res.status(200).json({ status: "OK" });
  });
};