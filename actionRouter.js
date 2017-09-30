var express = require('express');

var setRoutes = function(app){
  //ADD ACTION ROUTES HERE (POST)

  //LOGIN
  app.post('/performLogin', function(req, res) {
    console.log(req);
  });

};


module.exports = {
  setRoutes: setRoutes
}
