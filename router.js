var express = require('express');

var setRoutes = function(app){

  //SET STATIC for js/css/imgs
  app.use(express.static("public/assets/"));

  //HOME
  app.get('/', function(req, res){
    res.sendFile(__dirname +"/public/index.html");
  });

  //LOGIN
  app.get('/login', function(req, res){
    res.sendFile(__dirname +"/public/login.html");
  });
};


module.exports = {
  setRoutes: setRoutes
}
