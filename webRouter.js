var express = require('express');

var setRoutes = function(app){

  //SET STATIC for js/css/imgs
  app.use(express.static("public/assets/"));

  //ADD WEBROUTES HERE (GET)

  //HOME
  app.get('/', function(req, res){
    res.sendFile(__dirname +"/public/index.html");
  });

  //LOGIN
  app.get('/login', function(req, res){
    res.sendFile(__dirname +"/public/login.html");
  });
};

//ADD Director
app.get('/director/add', function(req,res){
  res.sendFile(__dirname +"/public/addDirector.html");
})


module.exports = {
  setRoutes: setRoutes
}
