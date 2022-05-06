const mongoose = require('mongoose')

const expenseSchema = new mongoose.Schema({

    type: String,
    amount: String,
    description: String,
    date: String,
})

module.exports = mongoose.model('Expense', expenseSchema)
