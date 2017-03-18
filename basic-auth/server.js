var express = require('express');
var morgan = require('morgan');
var http = require('http');
var fs = require('fs');
var path = require('path');

var hostname = 'localhost';
var port = 3000;

var app = express();
app.use(morgan('dev'));

function auth(req,res,next){
    //console.log(req.headers);
   var authHeader = req.headers.authorization;
   console.log("authHeader-->"+authHeader);
   if(!authHeader){
	 	var err = new Error('You are not authenticated!');
	    err.status = 401;
	    next(err);
	    return;
   }
   	var auth = new Buffer(authHeader.split(' ')[1], 'base64').toString().split(':');
   	console.log("auth -->"+auth);
   	var user = auth[0];
	var pass = auth[1];
	if (user == 'admin' && pass == 'pass') {
	    next(); // authorized
	} else {
	    var err = new Error('You are not authenticated!');
	    err.status = 401;
	    next(err);
	}
}

app.use(auth);

app.use(express.static(__dirname+'/public'));

app.use(function(err,req,res,next) {
            res.writeHead(err.status || 500, {
            'WWW-Authenticate': 'Basic',
            'Content-Type': 'text/plain'
        });
        res.end(err.message);
});

app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});