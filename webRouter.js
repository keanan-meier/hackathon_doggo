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

  //place holder data
  var directors = [ director={username:"billiyboy",name:"Bill",phone:"(306)737-0749", address:"123 Fake St."},
                  director={username:"test84923",name:"Ted",phone:"(306)737-0749", address:"123 Fake St."},
                  director={username:"frank849302",name:"Frank",phone:"(306)737-0749", address:"123 Fake St."},
                  director={username:"kate8392",name:"Kate",phone:"(306)737-0749", address:"123 Fake St."}
                ];

  var fosters = [ foster={username:"tomtomtom32",name:"Tommy",phone:"(306)737-0749", address:"123 Fake St."},
                  foster={username:"linda48932",name:"Linda",phone:"(306)737-0749", address:"123 Fake St."},
                  foster={username:"marshall84903",name:"Marshall",phone:"(306)737-0749", address:"123 Fake St."},
                  foster={username:"lauren8932",name:"Lauren",phone:"(306)737-0749", address:"123 Fake St."}
                ];

  var dogs = [dog={id:"1001", name:"Toby",age:"2", breed:"Cockapoo"},
                  dog={id:"2002", name:"Meatball",age:"5", breed:"Bulldog"},
                  dog={id:"3003", name:"Oscar",age:"1", breed:"Boxer"},
                  dog={id:"4004", name:"Jack",age:"8", breed:"Black Lab"}
              ];

  //VIEW FOSTERS
  app.get('/viewfosters', function(req, res){
    res.render('viewFosters', {data: fosters});
  });

  //VIEW DOGS
  app.get('/viewdogs', function(req, res){
    res.render('viewDogs', {data: dogs});
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
    //res.render('viewDirectors', {data: directors});
  });

  //INDV DOG
  app.get('/dog/:dogID', function(req, res){
    console.log(req.params.dogID);
    res.render('dog');
  });

  //INDV FOSTER
  app.get('/foster/:fosterID', function(req, res){
    console.log(req.params.fosterID);
    res.render('foster');
  });

  //INDV DIRECTOR
  app.get('/director/:directorID', function(req, res){
    console.log(req.params.directorID);
    res.render('director');
  });

  //ADD Director
  app.get('/add', function(req,res){
    res.render('addDirector');
  });
};
module.exports = {
  setRoutes: setRoutes
}
