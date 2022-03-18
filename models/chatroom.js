const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChatRoomSchema = new Schema({
    name:{
        type:String,
        required:true,
    
    },
    id:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:false
    },
    messages:{
        type:Array,
        required:true
    }
    ,
    date:{
        type:Date,
        default:Date.now
    }

})

module.exports =  ChatRoom = mongoose.model('chatroom', ChatRoomSchema)