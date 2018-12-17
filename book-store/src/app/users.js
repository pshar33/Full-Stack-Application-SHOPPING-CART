var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Schema = new Schema({
name : {type: String},
rating : {type: String},
review : {type: String},
product : {type: String}


});

module.exports = mongoose.model('users',Schema);
