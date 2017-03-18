var mongoose = require('mongoose'),
    assert = require('assert');

var Dishes = require('./models/dishes1');

// Connection URL
var url = 'mongodb://localhost:27017/conFusion';

mongoose.connect(url);
 var db = mongoose.connection;

 db.on('error', console.error.bind(console, 'connection error:'));

 //open the connection 
 db.once('open',function(){
 	// we're connected!
    console.log("Connected correctly to server");

    // create a new user
    var newDish = Dishes({
        name: 'Uthapizza',
        description: 'Test'
    });

    newDish.save(function (err) {
        if (err) throw err;
        console.log('Dish created!');

        // get all the users
        Dishes.find({}, function (error, dishes) {
            if (error) throw error;

            // object of all the users
            console.log(dishes);
                        db.collection('dishes').drop(function () {
                db.close();
            });
        });
    });
 });