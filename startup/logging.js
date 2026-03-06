const winston = require("winston");

module.exports = function() {
  // Winston already has a default console transport
  // No need to add another one - just ensure it's configured
  // Additional transports (like MongoDB) can be added here if needed
};