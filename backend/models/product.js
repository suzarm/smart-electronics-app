var mongoose = require("mongoose");
var Schema   = mongoose.Schema;

var ProductSchema=new Schema({
    image:String,
    gallery:[String],
    name:String,
    category:String,
    price:Number,
    description:String,
    

})

module.exports = mongoose.model('Product', ProductSchema);