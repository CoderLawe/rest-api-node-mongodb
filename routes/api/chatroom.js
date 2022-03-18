const express =  require('express')
const router = express.Router();

const ChatRoom = require('../../models/chatroom');
const { v4:uuid} = require('uuid')

router.get('/',(req, res) => {
    ChatRoom.find()
    .sort({date:-1})
    .then(rooms => res.json(rooms))
})

router.post('/', (req, res) => {
    const newRoom = new ChatRoom({
        name:req.body.name,
        id:uuid(),
        image:req.body.image,
        messages:req.body.messages


    })

    newRoom.save().then(room => res.json(room))
})

router.delete('/:id', (req, res) => {
    ChatRoom.findById(req.params.id)
    .then(room => room.remove().then(() => res.json({success:true})))
    .catch(err => res.status(404).json({success:false}) )
})

module.exports = router;