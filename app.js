var Express   = require('express')
  , Graph     = require('fbgraph')
  , app       = Express();

//var app = Express();

var Conf = require('./config.js').config;


app.get('/', function(req, res){
  res.send(Conf.client_id);
});

app.listen(3000);
console.log('Listening on port 3000');
