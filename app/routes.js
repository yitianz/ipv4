// app/routes.js
var Student, Major = require("./database.js");
// grab the user model we just created
var User = require('./models/user');

console.log(Major);
//var student = new Student({id : "i", courses : ["61a"], gpas : [40], majors : ["cs"]});
//student.save();
//var major = new Major({name : "CS", members: 10, gpa_sum : 40});
//major.save();
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
