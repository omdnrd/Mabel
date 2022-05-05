const { application } = require('express')
const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb+srv://admin:AclvbpmtzXBZcr13@cluster0.avseh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const server = express()

mongoose.connect(url, {useNewUrlPareser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('Connected!')
})
    
server.use(express.json())

const familyRouter = require('./routes/family')
server.use('/family', familyRouter)

server.listen(3000, () => {
    console.log('Server Started')
})
