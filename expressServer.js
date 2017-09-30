var express = require('express');
var webRouter = require('./webRouter');
var actionRouter = require('./actionRouter');
var app;

var createServer = function() {
    app = express();

    app.set('view engine', 'ejs');

    console.log('Server created');
    webRouter.setRoutes(app);
    console.log('WebRoutes set');
    actionRouter.setRoutes(app);
    console.log('ActionRoutes set');
};

var startServer = function() {
  if(!app){
    console.log('You must create a server first');
  }else{
    app.listen(3000);
    console.log('Server started on Port 3000');
  }
};

module.exports = {
  createServer: createServer,
  startServer: startServer
}
