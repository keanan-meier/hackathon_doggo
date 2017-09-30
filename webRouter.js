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

// var directors = [ director={name:"Bill",phone:"(306)737-0749", address:"123 Fake St."},
//                 director={name:"Ted",phone:"(306)737-0749", address:"123 Fake St."},
//                 director={name:"Frank",phone:"(306)737-0749", address:"123 Fake St."},
//                 director={name:"Kate",phone:"(306)737-0749", address:"123 Fake St."}
//               ]

  //VIEW DIRECTORS
  app.get('/viewdirectors', function(req, res){
      connection.query('SELECT * FROM director', function(err,data){
        if(err){
          throw err;
        } else {
          res.render('viewDirectors',{data: data});
        }
      });
    //res.render('viewDirectors', {data: directors});
});
  //ADD Director
  app.get('/add', function(req,res){
    res.render('addDirector');
  });
};
module.exports = {
  setRoutes: setRoutes
}
