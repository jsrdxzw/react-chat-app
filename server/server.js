const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const userRouter = require('./user')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user',userRouter)

const DB_URL = 'mongodb://localhost:27017/chat'
mongoose.connect(DB_URL)

app.listen(9093,function () {
    console.log('chat server is running at 9093')
})