var express   = require('express');
var app       = express();
var url       = require('url');
var request   = require('request');


var crypto = require('crypto');
var key    = new Buffer('Q93HDHKID6EN14OF595032JN63446295');
var e      = require('./encryption.js').encrypt;
var d      = require('./encryption.js').decrypt;



var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', (process.env.PORT || 8080));


app.get('/', function(req, res){
  res.send('Huzzah! It works!');
});

var dm = d(key, e(key, 'this is now decrypted'));
var em = e(key, 'this is now decrypted');

app.post('/post', function(req, res){

  var body = {
    response_type: "in_channel",
    text: em + " " + dm
  };

  res.send(body);

});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


// process.env.SHIELD_SLACKBOT_INTEGRATION_KEY