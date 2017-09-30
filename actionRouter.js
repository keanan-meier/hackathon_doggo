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

  //EDIT DOG
  app.post('/editDoggo', function(req,res){
    //new dog
    var updateDog = {
      id: req.body.id,
      name: req.body.name,
      breed: req.body.breed,
      age: req.body.age,
      gender: req.body.gender,
    };
    connection.query("UPDATE dog set `name`='"+updateDog.name+"',`breed`='"+updateDog.breed+"',`age`="+updateDog.age+",`gender`='"+updateDog.gender+ "' WHERE `id` = "+updateDog.id + ";",updateDog,function(err,result){
      if(err) throw err;
    });
      res.redirect('/dog');

  });
  //ADD DOG
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

  //UPDATE DOG
  app.post('/editDoggo', function(req,res){
    window.alert(newUpdate.id);
    //new dog
    var newUpdate = {
      name: req.body.name,
      breed: req.body.breed,
      age: req.body.age,
      gender: req.body.gender
    };
    connection.query("UPDATE dog set `name` = ?, `breed` = ?, `age` = ?, `gender`=? where `id` = ?",[newUpdate.name,newUpdate.breed,newUpdate.age,newUpdate.gender,newUpdate.id],function(err,result){
      if(err) throw err;
    });
    res.redirect('/viewDogs');
  });

  //ADD Director
  app.post('/addDirector', function(req,res){
    //new dog
    var newDirector = {
            fName:  req.body.fName,
              lName:  req.body.lName,
              email:  req.body.email,
              phone: req.body.phone,
              address: req.body.address,
              password: req.body.password
    };
    connection.query("INSERT INTO director (`firstName`,`lastName`,`email`,`phone`,`address`,`password`) VALUES (?,?,?,?,?,?)",[newDirector.fName,newDirector.lName,newDirector.email,newDirector.phone,newDirector.address,newDirector.password],function(err,result){
      if(err) throw err;
    });
    res.redirect('/viewDirectors');
  });

};

module.exports = {
  setRoutes: setRoutes
}
