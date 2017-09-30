//connection variables
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectId;
var url = 'mongodb://doggoadmin:doggo@ds155674.mlab.com:55674/ccrezqs';

//hardcoded insert document (record) into collection (table)
var insertDocument = function(db,callback) {
  db.collection('directors').insertOne({
    // "email": "teamrocket4ever@gmail.com",
    // "username": "meowth",
    // "password": "guest"
  }, function(err, result) {
    assert.equal(err,null);
    console.log('inserted a document into the directors collection');
    callback();
  });
};
//connect to db and add hardcoded document(record) into collection(table)
MongoClient.connect(url,function(err,db) {
  assert.equal(null,err);
  insertDocument(db,function() {
    db.close();
  });
});

//output list from collection (table) to console
var listDirectors = function(db, callback) {
  var cursor = db.collection('directors').find();
  cursor.each(function(err,doc) {
    assert.equal(err,null);
    if (doc!= null) {
      console.dir(doc);
    }else {
      callback();
    }
  });
};
//connect to db, and call list directors
MongoClient.connect(url, function(err,db) {
  assert.equal(null,err);
  listDirectors(db, function() {
    db.close();
  });
});

update section
var updateDirectors = function(db,callback) {
  db.collection('directors').updateOne(
    //find document entry
    //error handling needed if director not found
    //updating embedded documents, use dot notation
      //i.e. director.address.street
    {"username":"testDirector"},
    {
      //set new params
      $set: {"email": "hannah.kopytko@hotmail.com"},
      $currentDate: {"lastModifed": true}
    }, function (err,results) {
      console.log('update complete');
      callback();
    });
};

//connect and update!
MongoClient.connect(url,function(err,db) {
  assert.equal(null,err);

  updateDirectors(db, function() {
    db.close();
  });
});

//remove document from collection
var removeDirector = function(db,callback) {
  db.collection('directors').deleteOne(
    {"username":"doggoImposter"},
    function(err,results){
      console.log(results);
      callback();
    }
  );
};

//connect and purge! mwahah
MongoClient.connect(url,function(err,db){
  assert.equal(null,err);

  removeDirector(db,function() {
    db.close();
  });
});

module.exports = {
  createEntity: createEntity,
  readEntity: readEntity,
  updateEntity: updateEntity,
  deleteEntity: deleteEntity
}
