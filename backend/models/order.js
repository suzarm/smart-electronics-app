var mongoose = require("mongoose");
var Schema   = mongoose.Schema;

var OrderSchema=new Schema({
    receiver:{
        firstName:{
            type:String,
            required:true
        },
        lastname:{
            type:String,
            required:true
        },
        email:{
            type: String,
            required: true,
            match: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ 
        },
        phone:{
            type: String,
            required: true,
            minlength: 15 
        },
        required:true
    },
    products: [
        {
            id: { type: mongoose.Types.ObjectId, ref: 'Product' }, 
            count: { type: Number, required: true }
        }
    ],
    payment:{
        type:String,
        enum:["cash","card"]
    },
    delivery:{
        deliveryType:{
            type:String,
            required: true,
            enum:["doorToDoor","selfCollection"]
        },
        city:{
            type:String,
            required: true,
        },
        address:{
            type:String,
            required: true,
        },

    }
    
})

module.exports = mongoose.model('Order', OrderSchema);