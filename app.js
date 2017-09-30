const server = require('./server');
const expressServer = require('./expressServer');
const dbUtil = require('./Utils/dbTools');

dbUtil.openConnection(function(err){
expressServer.createServer();

expressServer.startServer();
});
//server.createServer();
//server.startServer();
