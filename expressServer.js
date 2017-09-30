var express = require('express');
var router = require('./router');
var app;

var createServer = function() {
    app = express();
    console.log('Server created');
    router.setRoutes(app);
    console.log('Routes set');
};

var startServer = function() {
  if(!app){
    console.log('You must create a server first')
  }else{
    app.listen(3000);
    console.log('Server started on Port 3000');
  }
};

module.exports = {
  createServer: createServer,
  startServer: startServer
}
