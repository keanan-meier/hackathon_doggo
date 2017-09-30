//connection variables
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectId;
var url = 'mongodb://doggoadmin:doggo@ds155674.mlab.com:55674/ccrezqs';

var openConnection = function() {

};

var closeConnection = function() {

};

module.exports = {
  openConnection: openConnection,
  closeConnection: closeConnection
}
