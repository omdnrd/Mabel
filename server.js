const express = require('express')
const mongoose = require('mongoose')
const server = express()

server.listen(3000, () => console.log('Server Started'))
const url = 'mongodb+srv://admin:AclvbpmtzXBZcr13@cluster0.avseh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}
mongoose.connect(url)
    .then( () => {
        console.log('Connected to the Database')
    })

    server.use(express.json())

    const subscribersRouter = require('./routes/subscribers')
    server.use('/subscribers', subscribersRouter)
