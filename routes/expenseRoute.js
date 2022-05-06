const express = require('express')
const router = express.Router()
const expense = require('../models/expense')
// Creating One 
router.post('/', (req, res)=>{

    const post = new expense({
        type: req.body.type,
        amount: req.body.amount,
        description: req.body.description,
        date: req.body.date
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
router.get('/:expenseId', (req, res) =>{
    expense.findById(req.params.expenseId).then(data=>{
        res.send(JSON.stringify(data));
    })
})

//Getting All
router.get('/', async (req,res) => {

    try {
        const expenses = await expense.find()
        res.json(expenses)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

module.exports = router