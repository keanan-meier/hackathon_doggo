var logonService = require("./logonService");

var loginController = function(operation, data){

  //perform operation
  switch(operation){}
    case "director":
      console.log("Director logon starting");
      logonService.createEntity(data);
      break;
    case "foster":
      console.log("Foster logon starting");
      logonService.readEntity(data);
      break;
  }
};

module.exports = {
  loginController: loginController
}
