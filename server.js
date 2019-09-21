// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************
// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var PORT = process.env.PORT || 8080;
// Sets up the Express App
// =============================================================
var app = express();
//
// // Sets up the Express app to handle data parsing
//
// // parse application/x-www-form-urlencoded

// // parse application/json
// app.use(bodyParser.json());

// Static directory
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride('_method'));
// Set Handlebars.
app.engine('handlebars',exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//reference routes.js file. Rec'd 'cannot get' error message in browser without this
var routes = require('./controllers/routes.js')
app.use('/',routes);
//

// Routes
// =============================================================
// require("./app/routes/api-routes.js")(app);
// require("./app/routes/html-routes.js")(app);

// Starts the server to begin listening
// =============================================================

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
