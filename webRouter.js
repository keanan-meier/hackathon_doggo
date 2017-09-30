var express = require('express');
var dbTools = require('./Utils/dbTools');
var connection = dbTools.dbConnection;

var setRoutes = function(app){
  //SET STATIC for js/css/imgs
  app.use(express.static("public/assets/"));

  //ADD WEBROUTES HERE (GET)

  //HOME
  app.get('/', function(req, res){
    res.render('home');
  });

  //LOGIN
  app.get('/login', function(req, res){
    res.render('login');
  });

  //VIEW FOSTERS
  app.get('/viewfosters', function(req, res){
    connection.query('SELECT * FROM foster', function(err,data){
      if(err){
        throw err;
      } else {
        res.render('viewFosters',{data: data});
      }
    });
  });

  //VIEW DOGS
  app.get('/viewdogs', function(req, res){
    connection.query('SELECT * FROM dog', function(err,data){
      if(err){
        throw err;
      } else {
        res.render('viewDogs',{data: data});
      }
    });
  });


  //VIEW DIRECTORS
  app.get('/viewdirectors', function(req, res){
      connection.query('SELECT * FROM director', function(err,data){
        if(err){
          throw err;
        } else {
          res.render('viewDirectors',{data: data});
        }
      });
  });

  //ADD Director
  app.get('/add', function(req,res){
    res.render('addDirector');
  });
};
module.exports = {
  setRoutes: setRoutes
}
