//connect to db mongo
var mongoose = require('mongoose');

mongoose.connect('mongodb://doggoadmin:doggo@ds155674.mlab.com:55674/ccrezqs');
//director schema
var directorSchema = new mongoose.Schema({
  email: {
    type:String,
    unique:true,
    required:true,
    trim:true,
  },
  username: {
    type:String,
    unique:true,
    required:true,
    trim:true,
  },
  password: {
    type:String,
    required:true,
  },
  passwordConf: {
    type:String,
    required:true,
  }
});
module.exports  = mongoose.model('Director', directorSchema);
