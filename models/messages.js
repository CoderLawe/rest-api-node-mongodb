const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    user:{
        type:String,
        required:true
    },

    time:{
        type:Date,
        default:Date.now
    },
    message:{
        type:String,
        required:true
    },

    room:{
        type:String,
        required:true
    },
    receiving:{
        type:Boolean,
        required:true
    }

})

module.exports = Message = mongoose.model('message', MessageSchema)