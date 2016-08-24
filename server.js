var express = require('express');
var app = express();
var url = require('url');
var request = require('request');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', (process.env.PORT || 8080));


app.get('/', function(req, res){
  res.send('Huzzah! It works!');
});

// process.env.SHIELD_SLACKBOT_INTEGRATION_KEY


app.post('/post', function(req, res){

  var body = {
    response_type: "in_channel",
    text: "I will eventually shield you."
  };

  res.send(body);
  if (error) { console.log(error) };


});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
