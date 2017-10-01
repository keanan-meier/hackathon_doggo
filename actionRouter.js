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
<<<<<<< HEAD
<<<<<<< HEAD
      recordType: req.body.body.title,
      date: req.body.body.date,
      updateDesc: req.body.body.desc,
      dogID: req.body.body.dogID
=======
      name: req.body.name,
      breed: req.body.breed,
      age: req.body.age,
      gender: req.body.gender
>>>>>>> parent of cf916e5... working update
    };
    connection.query("INSERT INTO dog (`name`,`breed`,`age`,`gender`) VALUES ('" + newDog.name + "', '"
    + newDog.breed + "', " + newDog.age + ",'" + newDog.gender + "');",function(err,result){
      if(err) throw err;
    });
<<<<<<< HEAD
    res.redirect('/dog/'+newUpdate.dogID);
=======
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
>>>>>>> parent of a762957... too bad here comes the update down the shit pipe
=======
    res.redirect('/viewDogs');
>>>>>>> parent of cf916e5... working update
  });
};


module.exports = {
  setRoutes: setRoutes
}
