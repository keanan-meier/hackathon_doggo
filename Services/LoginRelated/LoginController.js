var loginService = require("./loginService");

var loginController = function(operation, data){

  //perform operation
  switch(operation){
    case "director":
      console.log("Director logon starting");
      loginService.isDirector(data);
      break;
    case "foster":
      console.log("Foster logon starting");
      loginService.isFoster(data);
      break;
  }
};

module.exports = {
  loginController: loginController
}
