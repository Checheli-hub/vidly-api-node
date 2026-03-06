const winston = require("winston");

module.exports = function() {
  // Configure console transport for Winston 2.x
  winston.add(winston.transports.Console, {
    colorize: true,
    showMeta: false
  });
};