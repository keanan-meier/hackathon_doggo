var http = require('http');
var server;

var createServer = function(){
  server = http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('hey');
  });
};

var startServer = function(){
  server.listen(3000,'192.168.54.226');
  console.log('listening on port 3000');
};


module.exports = {
  createServer: createServer,
  startServer: startServer
}
