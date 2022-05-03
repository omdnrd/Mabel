<<<<<<< HEAD
const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true
},
subscribedToChannel: {
    type: String,
    required: true

},
subscribeDate: {
    type: Date,
    required: true,
    default: Date.now
}
})

=======
const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true
},
subscribedToChannel: {
    type: String,
    required: true

},
subscribeDate: {
    type: Date,
    required: true,
    default: Date.now
}
})

>>>>>>> a2e93bb4feeebea4a64b1b56559f0b18fadee37f
module.exports = mongoose.model('Subscriber', subscriberSchema)