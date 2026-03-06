const mongoose = require("mongoose");
const winston = require("winston");

module.exports = function() {
  const db = process.env.MONGODB_URI; // no fallback to localhost
  mongoose.connect(db)
    .then(() => winston.info("Connected to MongoDB..."))
    .catch(err => {
      winston.error("Could not connect to MongoDB...", err);
      process.exit(1); // ensures Render sees the failure
    });
};