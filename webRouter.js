var express = require('express');

var setRoutes = function(app){

  //SET STATIC for js/css/imgs
  app.use(express.static("public/assets/"));

  //ADD WEBROUTES HERE (GET)

  //HOME
  app.get('/', function(req, res){
    res.sendFile(__dirname + "/public/index.html");
  });

  //LOGIN
  app.get('/login', function(req, res){
    res.sendFile(__dirname +"/public/login.html");
  });
  //ADD Director
<<<<<<< HEAD
  app.get('director/add', function(req,res){
=======
  app.get('/add', function(req,res){
>>>>>>> b58b66c9165b1f3e50f6c661cb1f76b1c9459d94
    res.sendFile(__dirname + "/public/addDirector.html");
  });
};
module.exports = {
  setRoutes: setRoutes
}
