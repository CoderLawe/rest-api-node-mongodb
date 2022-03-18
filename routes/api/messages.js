const express = require('express')
const router = express.Router()

const Message = require('../../models/messages');

router.get('/', (req, res) => {
    Message.find()
    .sort({date:-1})
    .then(messages => res.json(messages))
})

router.post('/',(req, res) => {
    const newMessage = new Message({
        user:req.body.user,
        message:req.body.message,
        room:req.body.room,
        receiving:req.body.receiving
    })
    newMessage.save().then(message => res.json(message))
})

router.delete('/:id',(req, res)=> {
    Message.findById(req.params.id)
    .then(message => message.remove().then(() => res.json({success:"added"})))
    .catch(err => res.json(err))
})

module.exports = router;