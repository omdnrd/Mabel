const express = require('express')
const res = require('express/lib/response')
const router = express.Router()
const income = require('../models/income')

//Creating One
router.post('/', (req, res)=>{

    const post = new income({
        family: req.body.family,
        amount: req.body.amount,
        Date: req.body.Date
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

router.get('/getAllIncome', async (req, res) => {
    const allIncomes = await income.find()

    let totalIncome = 0

    allIncomes.forEach(income => {
        totalIncome += income.amount
    })

    res.json({ totalIncome })
})

//Getting One
router.get('/:incomeId', getIncome, (req, res) =>{
    income.findById(req.params.incomeId).then(data=>{
        res.send(JSON.stringify(data));
    })
})

//Getting All
router.get('/', async (req,res) => {

    try {
        const incomes = await income.find()
        res.json(incomes)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Updating One
//figure out why this is not working
router.patch('/:id', getIncome, async (req, res) => {
    if (req.body.amount == null) {
        res.status(400).json({ message: "Income Required"})
        return;    
    }
    try {
        const updatedIncome = await income.findByIdAndUpdate({_id:req.params.id},req.body)
        res.json(updatedIncome)
    } catch (err) {
        res.status(400).json({ message: err.message})
    }
})
//Deleting One
router.delete('/:id', getIncome, async (req, res) => {
    try {
        await res.income.findByIdAndRemove(req.params.id)
        res.json({ message: 'Deleted Income' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})


async function getIncome(req, res, next) {
    let Income
    try {
        Income = await income.findById(req.params.id)
        if (Income == null) {
            return res.status(404).json({ message: 'Cannot find Income '})
    }
}   catch (err) {
    return res.status(500).json({ message: err.message })
        
    }

    res. income = income
    next()
}


module.exports = router