const mongoose = require("mongoose");
const config = require("config");

const db = process.env.MONGODB_URI || config.get("db"); // Use environment variable first

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Connected to MongoDB: ${db}`))
  .catch((err) => console.error("Could not connect to MongoDB...", err));