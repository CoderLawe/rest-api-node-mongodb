const express = require('express');
const router = express.Router();

// Item Model
// ../ is like going back
const ListItem = require('../../models/listitem')

// @router GET api/items
// @desc Get all Items
router.get('/',(req,res) => {
    ListItem.find()
    .sort({ date: -1})
    .then(items => res.json(items))
})


// @router POST api/items
// @desc Post an Items
router.post('/',(req,res) => {
   const newItem = new ListItem({
       name:req.body.name
   });

   newItem.save().then(item => res.json(item));
});



// @router DELETE api/items
// @desc Delete an Item
router.delete('/:id',(req,res) => {
   ListItem.findById(req.params.id)
   .then(listitem => listitem.remove().then(() => res.json({success:true})))
   .catch(err => res.status(404).json({success:false}))

//    Fetch from URL
 })



module.exports = router;