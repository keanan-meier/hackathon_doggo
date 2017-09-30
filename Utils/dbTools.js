//connection
var MongoClient = require('mongodb').MongoClient;
var _db;

module.exports = {
  openConnection: function(callback) {
    MongoClient.connect("mongodb://doggoadmin:doggo@ds155674.mlab.com:55674/ccrezqs", function(err,db){
      _db = db;
      console.log('connected to db');
      return callback(err);
    });
  },
  getDb:function() {
    console.log('got db!');
    return _db;
  },
  closeDb:function {
    _db.close();
  }
};
