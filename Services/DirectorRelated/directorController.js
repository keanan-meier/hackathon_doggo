var directorService = require("./directorService");
var dbUtil = require('./../../Utils/dbTools');
var directorController = function(operation, data){
  var db = dbUtil.getDb();
  //perform operation
  switch(operation){
    case 'create':
      console.log("Director create starting");
      directorService.createEntity(db,data);
      break;
    case "read":
      console.log("Director read starting");
      directorService.readEntity(db,data);
      break;
    case "update":
      console.log("Director update starting");
      directorService.updateEntity(db,data);
      break;
    case "delete":
      console.log("Director delete starting");
      directorService.deleteEntity(db,data);
      break;
  }
};

module.exports = {
  directorController: directorController
}
