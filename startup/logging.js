const winston = require("winston");

module.exports = function() {
  // You can configure more transports here if you want
  winston.add(new winston.transports.Console({ format: winston.format.simple() }));
};