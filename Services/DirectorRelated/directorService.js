//create Director
var createEntity = function(db,data) {
  db.collection('directors').insertOne({
     "email": data.email,
     "username": data.username,
     "password": data.password
  }, function(err, result) {
    console.log(err);
    
  });
};

var readEntity = function(db,data) {
  var cursor = db.collection('directors').find();
  cursor.each(function(err,doc) {
    if(doc!=null) {
      //print doc to html table
    } else {
      //print no items
    }
  });
};


// //output list from collection (table) to console
// var listDirectors = function(db, callback) {
//   var cursor = db.collection('directors').find();
//   cursor.each(function(err,doc) {
//     assert.equal(err,null);
//     if (doc!= null) {
//       console.dir(doc);
//     }else {
//       callback();
//     }
//   });
// };
// update section
// var updateDirectors = function(db,callback) {
//   db.collection('directors').updateOne(
//     //find document entry
//     //error handling needed if director not found
//     //updating embedded documents, use dot notation
//       //i.e. director.address.street
//     {"username":"testDirector"},
//     {
//       //set new params
//       $set: {"email": "hannah.kopytko@hotmail.com"},
//       $currentDate: {"lastModifed": true}
//     }, function (err,results) {
//       console.log('update complete');
//       callback();
//     });
// };
// //remove document from collection
// var removeDirector = function(db,callback) {
//   db.collection('directors').deleteOne(
//     {"username":"doggoImposter"},
//     function(err,results){
//       console.log(results);
//       callback();
//     }
//   );
// };
module.exports = {
  createEntity: createEntity,
  readEntity: readEntity,
  //updateEntity: updateEntity,
  //deleteEntity: deleteEntity
}
