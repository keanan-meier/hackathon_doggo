var express = require('express');
var bodyParser =require('body-parser');

var setRoutes = function(app){
  //ADD ACTION ROUTES HERE (POST)

  //SETUP PARSERS
  app.use(bodyParser());

  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use(bodyParser.json());

  //LOGIN
  app.post('/performLogin', function(req, res) {
    console.log(req.body.user);
  });

};


module.exports = {
  setRoutes: setRoutes
}
