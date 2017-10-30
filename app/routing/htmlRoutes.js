//Include the dependency for path module so that the code can find the html content on the server
var path = require('path');

module.exports = function(app) {

    app.get("/", function(req, res) {

        res.sendFile(path.join(__dirname, "/../public/home.html"));

    });

    app.get("/survey", function(req, res) {

        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    })
}