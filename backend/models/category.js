var mongoose = require("mongoose");
var Schema   = mongoose.Schema;

var CategorySchema= new Schema({
    image:String,
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    }
})

module.exports = mongoose.model('Category', CategorySchema);