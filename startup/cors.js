const cors = require("cors");

module.exports = function(app) {
  app.use(cors());
  app.use(express.json()); // To parse JSON bodies
};