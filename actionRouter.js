var express = require('express');
var bodyParser =require('body-parser');
var dc = require('./Services/DirectorRelated/directorController');
var lc = require('./Services/LoginRelated/loginController');

var setRoutes = function(app){
  //ADD ACTION ROUTES HERE (POST)

  //SETUP PARSERS
  app.use(bodyParser());

  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use(bodyParser.json());

  //LOGIN
  app.post('/performDirectorLogin', function(req, res) {
    lc.loginController('director', req.body.user);
  });

  app.post('/performFosterLogin', function(req, res) {
    lc.loginController('foster', req.body.user);
  });

  //ADD DIRECTOR
  app.post('/addDirector', function(req,res){
    dc.directorController('create',req.body.director);
  });
};

module.exports = {
  setRoutes: setRoutes
}
