const mongoose = require('mongoose')

const expenseSchema = new mongoose.Schema({

    type: String,
    amount: Number,
    description: String,
    Date: {
        type: Date,
        required: true,
        default: Date.now()
    }
})

module.exports = mongoose.model('Expense', expenseSchema)
