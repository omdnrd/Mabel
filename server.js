const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors')


//const MongoClient = require('MongoClient')
const url = 'mongodb+srv://admin:AclvbpmtzXBZcr13@cluster0.avseh.mongodb.net/appProject?retryWrites=true&w=majority'

const server = express()

//middlewear to append cors headers to responses
//update to match the domain you will make the request from
server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


mongoose.connect(url)
const con = mongoose.connection

con.on('open', () => {
    console.log('Connected!')
})
    
server.use(express.json());
//not sure what this is for
server.use(express.urlencoded({
    extended: true
}));

//see if i should use somehting else instead of '/api/family'
const familyRouter = require('./routes/familyRoute')
server.use('/api/family', familyRouter)

const expenseRouter = require('./routes/expenseRoute')
server.use('/api/expense', expenseRouter)

const incomeRouter = require('./routes/incomeRoute')
server.use('/api/income', incomeRouter)

server.listen(3000, () => {
    console.log('Server Started')
    
})

server.use(cors());


