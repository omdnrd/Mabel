const express = require('express')
const router = express.Router()
const family = require('../models/family')
//const income = require('../models/income')

//Creating One 
router.post('/', (req, res)=>{

   //let obj = {
        //date: req.body.date,
        //payment: req.body.payment
     //}

   
    const post = new family({
        familyName: req.body.name,
        //amount: , need to see how to append this array
        status: req.body.status,
        term: req.body.term
    })

    //Did not need this as it was giving error [ERR_HEADERS_SENT]
    //res.send(post)

    post.save().then(data =>{
        return res.json(data);
    }).catch(err => {
        return res.json(err).send({
            message:err.message|| "some error occured"
        });
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

// Updating One
router.patch('/:id', getFamily, async (req, res) => {
    if (req.body.amount != null) {
        res.expense.amount = req.body.amount
    }
    try {
        const updatedFamily = await res.expense.save()
        res.json(updatedFamily)
    } catch (err) {
        res.status(400).json({ message: err.message})
    }
})
//Deleting One
router.delete('/:id', getFamily, async (req, res) => {
    try {
        await family.findByIdAndDelete({_id:req.params.id})
        res.json({ message: 'Deleted Family' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getFamily(req, res, next) {
    let Family
    try {
        Family = await family.findById(req.params.id)
        if (family == null) {
            return res.status(404).json({ message: 'Cannot find Family '})
    }
}   catch (err) {
    return res.status(500).json({ message: err.message })
        
    }

    res. family = family
    next()
}

module.exports = router