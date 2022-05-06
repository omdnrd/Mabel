const express = require('express')
const mongoose = require('mongoose')

//const MongoClient = require('MongoClient')
const url = 'mongodb+srv://admin:AclvbpmtzXBZcr13@cluster0.avseh.mongodb.net/appProject?retryWrites=true&w=majority'

const server = express()


mongoose.connect(url)
const con = mongoose.connection

con.on('open', () => {
    console.log('Connected!')
})
    
server.use(express.json())

const familyRouter = require('./routes/familyRoute')
server.use('/api/family', familyRouter)

const expenseRouter = require('./routes/expenseRoute')
server.use('/api/expense', expenseRouter)

const incomeRouter = require('./routes/incomeRoute')
server.use('/api/income', incomeRouter)

server.listen(3000, () => {
    console.log('Server Started')
})
