var express = require('express');
var router = express.Router();
var Users = require('../models/addusers');
var verify = require('./verify');
/* GET home page. */
router.post('/', function(req, res, next) {
  /*res.render('index', { title: 'Express' });*/
  /*res.end('Added the user with id: ' + req.body.name);*/
	if(req.body.username && req.body.password){
		var name = req.body.username;
		var password = req.body.password;
	}
	//res.json({"userName":name,"password":password});
	// usually this would be a database call:	
	  Users.find({username : name}).exec(function(err, docs) {
	   	if (docs.length){
      		if(docs[0].password === password) {
	 			//res.json({"ID":docs[0]._id});
	 			token = verify.getToken(docs[0]);
	 			res.json({message: "ok", token: token});
	 		} else {
	    		res.json({message:"Passwords did not match"});
	  		}
    	} else {
	      	res.json({message:"No such user found"});
   		}
   		
 		
	  });

});

module.exports = router;
