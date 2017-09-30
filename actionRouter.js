var express = require('express');
var bodyParser =require('body-parser');
var dc = require('./Services/DirectorRelated/directorController');
var lc = require('./Services/LoginRelated/loginController');

var dbUtil = require('./Utils/dbTools');
var setRoutes = function(app){
  //ADD ACTION ROUTES HERE (POST)

  //SETUP PARSERS
  app.use(bodyParser());

  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use(bodyParser.json());

//db object
  var db = dbUtil.getDb();

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

  //READ DIRECTOR
  app.get('/directors', function(req,res){
    var cursor = db.collection('directors').find();
    cursor.each(function(err,doc) {
      if(doc!=null) {
        res.send(doc.username);
      } else {
      }
    });
  })
};

module.exports = {
  setRoutes: setRoutes
}
