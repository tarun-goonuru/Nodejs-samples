var _ = require("lodash");
var config = require('../config');
var jwt = require('jsonwebtoken');

var passport = require("passport");
var passportJWT = require("passport-jwt");

var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;

var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader();
jwtOptions.secretOrKey = config.secretKey;
var strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
  console.log('payload received', jwt_payload);
  // usually this would be a database call:
  var user = users[_.findIndex(users, {_id: jwt_payload._id})];
  if (user) {
    next(null, user);
  } else {
    next(null, false);
  }
});

exports.getToken = function(user){
	var payload = {_id: user._id};
	var token = jwt.sign(payload, jwtOptions.secretOrKey);
	return token;
}

passport.use(strategy);