const express = require('express')
const router = express.Router()
const family = require('../models/family')
//const income = require('../models/income')

//Creating One 
router.post('/', (req, res)=>{

   let obj = {
        date: req.body.date,
        payment: req.body.payment
     }
    const post = new family({
        familyName: req.body.familyName,
        //amount: , need to see how to append this array
        status: req.body.status,
        term: req.body.term
    })

    res.send(post);

    post.save()
    .then(data =>{
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
})

//Getting One
router.get('/:familyId', (req, res) =>{
    family.findById(req.params.familyId).then(data=>{
        res.send(JSON.stringify(data));
    })
})

//Getting All
router.get('/', async (req,res) => {

    try {
        const families = await family.find()
        res.json(families)
    } catch (err) {
        res.status(500).json({ message: err.message })
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