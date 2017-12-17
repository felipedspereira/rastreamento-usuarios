var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
});

/**
 * Apis
 */

var user = {email : '', activities : []};

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.post('/enableActivity', function (req, res) {
    user.email = req.body.email;
    res.send();
});

app.post('/activity', function (req, res) {
    var userActivities = req.body;

    userActivities.forEach(item => {
        user.activities.push(item);
    });

    console.log(JSON.stringify(user, null, 4))

    return res.send('message successfull');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});