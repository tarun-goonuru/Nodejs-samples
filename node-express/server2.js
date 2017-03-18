var express = require('express');
var morgan = require('morgan');
var http = require('http');
var fs = require('fs');
var path = require('path');

var hostname = 'localhost';
var port = 3000;

var app = express();
app.use(morgan('dev'));
app.use(express.static(__dirname+'/public'));

app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});