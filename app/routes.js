// app/routes.js
//var Major = require("./database.js");
// grab the user model we just created
var tables = require('./models/user');
var User = tables.User;
var Class = tables.Class;
var Major = tables.Major;


// returns a User
function addUser(name, id, completed_classes, majors, graduation_semester) {
    var user = new User({
	name : name,
	id : id,
	completed_classes : completed_classes,
	majors : majors,
	graduation_semester
    });
    user.save();
};

// gets a usr promise
// use <return>.then(function(result) {return result;});
// to get value
// <return> is null if user doesn't exist
function getUserPromise(id) {
    return User.findOne({id : id}).exec();
}

// remove and return user by id
function removeUser(id) {
    User.findOne({id : id}).exec().then(
	function(result) {
	    result.remove();
	    return result;
	}
    ).catch(
	function(result) {
	    return null;
	}
    );
}

 
    module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        // sample api route
        app.get('/api/users', function(req, res) {
            // use mongoose to get all users in the database
            User.find(function(err, nerds) {
                // if there is an error retrieving, send the error
                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);
                
                res.json(nerds); // return all nerds in JSON format
            });
        });

        // route to handle creating goes here (app.post)
        // route to handle delete goes here (app.delete)

        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendfile('./public/views/index.html'); // load our public/index.html file
        });
    
    };
