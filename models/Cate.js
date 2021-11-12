// models/user.model.js
// load all the libraries we need
var mongoose = require('mongoose');

// định nghĩa cấu trúc user model
var Schema = mongoose.Schema;
var cates = new Schema({
   
    namecate: {type: String, required: false}
   
}); 

module.exports = mongoose.model('cates', cates);
