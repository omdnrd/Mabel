const mongoose = require('mongoose')

const incomeSchema = new mongoose.Schema({

    family: String,
    amount: String,
    date: String,
})

module.exports = mongoose.model('Income', incomeSchema)