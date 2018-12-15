// JavaScript source code
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Schema = new Schema({
name : {type: String},
image : {type: String},
description : {type: String},
availability : {type: number},
//rating: {type: number};
//comments: {type: String},
price : {type: number},
quantity : {type: number},
//$key: {type: String};


});

module.exports = mongoose.model('Product',Schema);
