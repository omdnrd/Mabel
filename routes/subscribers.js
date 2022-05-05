const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber')

module.exports = router

// Getting all
router.get('/', async (_req,res) => {

    try {
        const subscribers = await Subscriber.find()
        res.json(subscribers)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})
// Getting one
router.get('/:id', (req, res) => {
 res.send(req.params.id)
    res.json(res.subscriber)  
})
// Creating one
router.post('/', async (req, res) => {
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel
    })

    try {
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }

})
// Updating One
router.patch('/:id', getSubscriber, async (req, res) => {
    if (req.body.name != null) {
        res.subscriber.name = req.body.name
    }
    if (req.body.subscribedToChannel != null) {
        res.subscriber.subscribedToChannel = req.body.subscribedToChannel
    }
    try {
        const updatedSubscriber = await res.subscriber.save()
        res.json(updatedSubscriber)
    } catch (err) {
        res.status(400).json({ message: err.message})
    }
})
// Deleting One
router.delete('/:id', getSubscriber, async (_req, res) => {
    try {
        await res.subscriber.remove()
        res.jscon({ message: 'Deleted Subscriber' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getSubscriber(req, res, next) {
    let subscriber
    try {
        subscriber = await Subscriber.findById(req.params.id)
        if (subscriber == null) {
            return res.status(404).json({ message: 'Cannot find Subscriber '})
    }
}   catch (err) {
    return res.status(500).json({ message: err.message })
        res.subscriber = subscriber
        next()
    }

}

module.exports = router