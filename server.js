const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.listen(3000, () => console.log('Server Started'))
const url = 'mongodb+srv://Sheila:password!1@mycluster.nz5xh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}
mongoose.connect(url)
    .then( () => {
        console.log('Connected to the Database')
    })

    app.use(express.json())

    const subscribersRouter = require('./routes/subscribers')
    app.use('/subscribers', subscribersRouter)
