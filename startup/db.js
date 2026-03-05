const mongoose = require("mongoose");

module.exports = function () {
  const db = process.env.MONGODB_URI || "mongodb://localhost/vidly";
  mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB..."))
    .catch((err) => console.error("Could not connect to MongoDB...", err));
};