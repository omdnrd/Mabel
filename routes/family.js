const express = require('express')
const router = express.Router()
const family = require('../models/family')

// Getting 
router.get('/', async (_req,res) => {

    try {
        const families = await family.find()
        res.json(families)
    } catch (err) {
        res.send('Error ' + err)
    }
})
// Getting 
router.get('/:id', (req, res) => {
    try{
        const family = await family.findById(req.params.id)
        res.json(family)
    }catch(err){
        res.send('Error' + err)
    }
})
// Creating 
router.post('/', async (req, res) => {
    const family = new Family({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
        
    })

    try {
        const a1 = await family.save()
        res.json(a1)
    } catch (err) {
      res.send('Error')
    }

})
// Updating 
router.patch('/:id', async (req, res) => {
    try{
        const family = await Family.findById(req.param.id)
        family.sub = req.body.sub
        const a1 = await family.save()
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})
// Deleting One
//router.delete('/:id', getSubscriber, async (_req, res) => {
   // try {
        //await res.subscriber.remove()
       // res.jscon({ message: 'Deleted Subscriber' })
    //} catch (err) {
        //res.status(500).json({ message: err.message })
   // }
//})

//async function getSubscriber(req, res, next) {
    //let subscriber
    //try {
      //  subscriber = await Subscriber.findById(req.params.id)
     //   if (subscriber == null) {
     //       return res.status(404).json({ message: 'Cannot find Subscriber '})
   // }
//}   catch (err) {
   // return res.status(500).json({ message: err.message })
   //     res.subscriber = subscriber
    //    next()
    //}

//}

module.exports = router