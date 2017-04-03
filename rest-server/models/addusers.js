// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
    username:  {
        type: String,
        required: true
    },
    password:  {
        type: String,
        required: true
    },
    phonenumber:  {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var Users = mongoose.model('User', usersSchema);

// make this available to our Node applications
module.exports = Users;