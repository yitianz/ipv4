// server.js

// Modules =================================================

var express        = require('express');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var mongoose       = require('mongoose');
var console        = require('console');

var app = express();

// Configuration ===========================================

// config files
var db = require('./config/db');

// set our port
var port = process.env.PORT || 8080; 

// connect to our mongoDB database 
// TODO: (uncomment after you enter in your own credentials in config/db.js)
// mongoose.connect(db.url);

mongoose.connect("mongodb+srv://ray:raypassword@cluster0-sv1an.mongodb.net/admin").then(
    () => { console.log("SUCCESS: Connected to MongoDB Atlas") /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
    err => { console.log("FAIL: Failed to connect to MongoDB Atlas"); process.exit(-1) /** handle initial connection error */ }
);;

var database = mongoose.connection;


// get all data/stuff of the body (POST) parameters
// parse application/json 
app.use(bodyParser.json()); 

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override')); 

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public')); 

// Routes ==================================================

require('./app/routes')(app); // configure our routes

// Start app ===============================================

// startup our app at http://localhost:8080
app.listen(port);               

// shoutout to the user                     
console.log('Magic happens on port ' + port);

// expose app           
exports = module.exports = app;  
