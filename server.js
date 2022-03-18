const express = require('express');
const mongoose = require('mongoose');

const items = require('./routes/api/listitems');
const messages = require('./routes/api/messages');
const chatroom = require('./routes/api/chatroom');
const dotenv = require('dotenv');
dotenv.config();
const app = express()

// const db = require('./config/keys').mongoURI
const db = process.env.MONGO_URI
app.use(express.json())
// Connect to Mongo

mongoose.connect(db)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err))


app.use('/api/listitems', items)
app.use('/api/messages', messages)
app.use('/api/chatroom', chatroom )
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}}`))