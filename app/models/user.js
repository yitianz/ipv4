// app/models/user.js
// grab the mongoose module
var mongoose = require('mongoose');
console.log("Load MongoDB Atlas stuff");
mongoose.connect("mongodb+srv://ray:raypassword@cluster0-sv1an.mongodb.net/BearPlanner");

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("SUCCESS: Connection to MongoDB Atlas");
    var Schema = mongoose.Schema;
});
// Define our user model
// module.exports allows us to pass this to other files when it is called
var User  = mongoose.model('User', {
    name : {type : String, default: ''},
    id : {type : String, default: ''},
    completed_classes : { type : Object, default: []},
    majors : { type : Object, default: []},
    graduation_semester : { type : String, default: '' }
});

var Class = mongoose.model('Class', {
    name : String,
    class_code : String,
    dates_offered : [],
    prerequisites: []
});

var Major = mongoose.model('Major', {
    name : String,
    upper_divs : [],
    lower_divs : []
});



module.exports = {User : User,
		  Major : Major,
		  Class : Class};
