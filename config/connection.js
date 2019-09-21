// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Require mysql
var mysql = require("mysql");

// Set up our connection information

  var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Shynggys123",
    database: "burgers_db"
  });



// Connect to the database
connection.connect(function(err) {
  if(err)throw err;
  console.log("connected as id: " + connection.threadId);
});

// Export connection
module.exports = connection;
