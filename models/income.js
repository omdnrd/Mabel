const mongoose = require('mongoose')

const incomeSchema = new mongoose.Schema({

    family: String,
    amount: Number,
    Date: String,
})

module.exports = mongoose.model('Income', incomeSchema)