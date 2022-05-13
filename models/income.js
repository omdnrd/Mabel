const mongoose = require('mongoose')

const incomeSchema = new mongoose.Schema({

    family: String,
    amount: Number,
    Date: {
        type: Date,
        required: true,
        default: Date.now()
    },
})

module.exports = mongoose.model('Income', incomeSchema)