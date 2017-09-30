var directorService = require("./directorService");

var directorController = function(operation, data){

  //perform operation
  switch(operation){}
    case "create":
      console.log("Director create starting");
      directorService.createEntity(data);
      break;
    case "read":
      console.log("Director read starting");
      directorService.readEntity(data);
      break;
    case "update":
      console.log("Director update starting");
      directorService.updateEntity(data);
      break;
    case "delete":
      console.log("Director delete starting");
      directorService.deleteEntity(data);
      break;
  }
};

module.exports = {
  directorController: directorController
}
