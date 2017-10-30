var path = require('path');
var friendsArray = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsArray);
    });

    app.post("/api/submitSurvey", function(req, res) {
        console.log("in server");
        console.log(req.body);
        newSurveyAnswers = req.body.answers;
        var lowestDiffFromSurvey = 99;
        var lowestDiffFromSurveyFriendIndex = 0;
        var diffFromSurvey = 0;
        friendsArray.forEach(function(friendSurvey, indexFriendSurvey, friendSurveys) {
            diffFromSurvey = 0;
            friendSurvey.answers.forEach(function(choice, index, allChoicesArray) {
                diffFromSurvey = diffFromSurvey + Math.abs(newSurveyAnswers[index] - choice);
            });
            if (diffFromSurvey < lowestDiffFromSurvey) {
                lowestDiffFromSurvey = diffFromSurvey;
                lowestDiffFromSurveyFriendIndex = indexFriendSurvey;
            }
        });

        var lowestDiffFriend = {
            name: friendsArray[lowestDiffFromSurveyFriendIndex].name,
            imageURL: friendsArray[lowestDiffFromSurveyFriendIndex].imageURL
        };

        friendsArray.push(req.body);

        res.json(lowestDiffFriend);
    });
}