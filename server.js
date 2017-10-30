//Npm package dependencies that are used in the application
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//Setting up server using express
var app = express();

//Setting up the port to listen on
var port = process.env.PORT || 8080;

//set up bodypareser to parse the content from and to the browser...by calling the bodyparser methods
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(path.join(process.cwd() + "/public")));
app.set('json spaces', 4);


//direct the server to call the functions declared in the apiRoutes.js and htmlRoutes.js by sending express-app as a parm
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(port, function() {
    console.log("Server Listening on Port " + port);
});