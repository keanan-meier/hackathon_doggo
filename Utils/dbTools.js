var express = require('express');
var mysql = require('mysql');
var app = express();

var dbConnection = mysql.createConnection({
  host:'127.0.0.1',
  user:'root',
  password: '',
  database: 'ccrezqs'
});

dbConnection.connect((err)=>{
  if(err){
    throw err;
  }
  console.log('c  onnected to db...');
});
module.exports = {
  dbConnection: dbConnection
}
