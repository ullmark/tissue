var https = require('https');

// RPC: Authentication
// -------------------
// This Pub/Sub Component handles the OAuth authentication
// against GitHub.

exports.actions = function(req, res, ss) {
  req.use('session');

  return {

    // Gets the current access token
    // if any
    getAccessToken: function() {
      res(req.session.accessToken);
    },

    // Method to Recieve a Real Access Token
    // from Github
    createAccessToken: function(code) {

      var path = '/login/oauth/access_token';
      path += '?client_id=fedd4b9d16560ee6cd35';
      // yeah i know, will make a new app when i've solved configs
      path += '&client_secret=26f1db1d1ade031e1e01795c25a542c92db4b5c3';
      path += '&code=' + code;

      // Define our request
      var options = {
        host: 'github.com',
        path: path,
        method: 'POST',
        headers: {
          "Accept": "application/json"
        }
      };

      // Make a POST request to Github, to obtain a Access Token
      https.request(options, function(response) {
        response.setEncoding('utf8');
        response.on('data', function(data) {
          var data = JSON.parse(data);
          req.session.accessToken = data.access_token;
          res(data.access_token);
        });
      }).end();
    }
  };
};
