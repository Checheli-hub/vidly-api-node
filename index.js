require("./startup/logging")();
require("./startup/cors")(app);
require("./startup/routes")(app);
require("./startup/db")();          // Reads process.env.MONGODB_URI
require("./startup/config")();      
require("./startup/validation")();  // Must be a function in validation.js