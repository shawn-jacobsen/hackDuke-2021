var express = require('express'); // Express web server framework
var request = require('request'); // "Request" library
var cors = require('cors');
var querystring = require('querystring');
var cookieParser = require('cookie-parser');
import sessions from './sessions'

var client_id = '4cecfbc846464e938d975ba8f44081ad'; // Your client id
var client_secret = '359d887e40fc4fdcbc09989155cc08cb'; // Your secret
var redirect_uri = 'http://localhost:8888/callback'; // Your redirect uri

var stateKey = 'spotify_auth_state';

var app = express();

app.use(express.static(__dirname + '/public'))
   .use(cors())
   .use(cookieParser());


app.get('/login', function(req, res) {

 
});

app.get('/sessions', sessions)

app.get('/callback', function(req, res) {

  
});

app.get('/refresh_token', function(req, res) {

  // requesting access token from refresh token
  var refresh_token = req.query.refresh_token;
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token;
      res.send({
        'access_token': access_token
      });
    }
  });
});

app.get('session', sessions);

console.log('Listening on 8888');
app.listen(8888);
