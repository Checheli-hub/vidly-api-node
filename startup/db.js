const mongoose = require("mongoose");
const winston = require("winston");

module.exports = function() {
  const db = process.env.MONGODB_URI;
  if (!db) throw new Error("FATAL ERROR: MONGODB_URI not defined");

  mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => winston.info("Connected to MongoDB..."))
    .catch(err => {
      winston.error("Could not connect to MongoDB...", err);
      process.exit(1); // Stop Node if DB connection fails
    });
};