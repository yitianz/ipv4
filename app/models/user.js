// app/models/user.js
// grab the mongoose module
var mongoose = require('mongoose');

// Define our user model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('User', {
    name : {type : String, default: ''},
    id : {type : String, default: ''},
    completed_classes : { type : Object, default: []},
    majors : { type : Object, default: []},
    graduation_semester : { type : String, default: '' }
});