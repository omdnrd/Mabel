const mongoose = require('mongoose')

const familySchema = new mongoose.Schema({

    familyName: String,
    //amount: //[
        //{
            //date: String,
            //payment: Number
        //}
    //],
    date: Number,
    status: String,
    term: Number,
})

module.exports = mongoose.model('Family', familySchema)