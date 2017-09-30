//connect to db mongo
var mongoose = require('mongoose');

mongoose.connect('mongodb://doggoadmin:doggo@ds155674.mlab.com:55674/ccrezqs');

//director schema
var directorsSchema = new mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  email:String
});

var Directors = mongoose.model('Directors', directorsSchema);

var directorOne = Directors({
  username: 'testDirector',
  password:'test',
  firstName: 'Test',
  lastName: 'Doggo'
}).save(function(err){
  if (err) throw err;
  console.log('director saved');
});
