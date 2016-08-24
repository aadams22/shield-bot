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
  // var parsed_url = url.format({
  //   pathname: 'https://api.genius.com/search',
  //   query: {
  //     access_token: process.env.GENIUS_ACCESS,
  //     q: req.body.text
  //   }
  // });

  request(function (error, response, body) {
    if (!error && response.statusCode == 200) {
      // var data = JSON.parse(body);
      // var first_url = data.response.hits[0].result.url;

      var body = {
        response_type: "in_channel",
        text: "I will eventually shield you."

      };

      res.send(body);
    }

    if (error) { res.send(error) };

  });


});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
