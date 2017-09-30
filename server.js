var http = require('http');

var server = http.createServer(function(req,res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('hey');
});

server.listen(3000,'192.168.54.221');
console.log('listening on port 3000');
