var express = require('express');
var bodyParser =require('body-parser');
var dc = require('./Services/DirectorRelated/directorController');
var lc = require('./Services/LoginRelated/loginController');
var dbTools = require('./Utils/dbTools');
var connection = dbTools.dbConnection;

//var dbUtil = require('./Utils/dbTools');
var setRoutes = function(app){
  //ADD ACTION ROUTES HERE (POST)

  //SETUP PARSERS
  app.use(bodyParser());

  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use(bodyParser.json());

//db object
  //var db = dbUtil.getDb();

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


  app.post('/addDog', function(req,res){
    //new dog
    var newDog = {
      name: req.body.name,
      breed: req.body.breed,
      age: req.body.age,
      gender: req.body.gender
    };
    connection.query("INSERT INTO dog (`name`,`breed`,`age`,`gender`) VALUES ('" + newDog.name + "', '"
    + newDog.breed + "', " + newDog.age + ",'" + newDog.gender + "');",function(err,result){
      if(err) throw err;
    });
    res.redirect('/viewDogs');
  });

  app.post('/postUpdate', function(req,res){
    //new dog
    var newUpdate = {
      recordType: req.body.body.title,
      date: req.body.body.date,
      updateDesc: req.body.body.desc,
      dogID: req.body.body.dogID
    };
    connection.query("INSERT INTO dog_requests (`recordType`,`date`,`updateDesc`,`dogID`) VALUES (?,?,?,?);",[newUpdate.recordType, newUpdate.date, newUpdate.updateDesc,newUpdate.dogID],function(err,result){
      if(err) throw err;
    });
    res.redirect('/dog/'+newUpdate.dogID);
  });
};

module.exports = {
  setRoutes: setRoutes
}
