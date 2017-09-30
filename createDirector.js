var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectId;
var url = 'mongodb://doggoadmin:doggo@ds155674.mlab.com:55674/ccrezqs';

var insertDocument = function(db,callback) {
  db.collection('directors').insertOne({
    "email": "hjkopytko@gmail.com",
    "username": "testDirector",
    "password": "guest"
  }, function(err, result) {
    assert.equal(err,null);
    console.log('inserted a document into the directors collection');
    callback();
  });
};

MongoClient.connect(url,function(err,db) {
  assert.equal(null,err);
  insertDocument(db,function() {
    db.close();
  });
});
