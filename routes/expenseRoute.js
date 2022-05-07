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

// Updating One
router.patch('/:id', getExpense, async (req, res) => {
    if (req.body.amount != null) {
        res.expense.amount = req.body.amount
    }
    try {
        const updatedExpense = await res.expense.save()
        res.json(updatedExpense)
    } catch (err) {
        res.status(400).json({ message: err.message})
    }
})
//Deleting One
router.delete('/:id', getExpense, async (req, res) => {
    try {
        await res.expense.remove()
        res.json({ message: 'Deleted Expense' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})


async function getExpense(req, res, next) {
    let Expense
    try {
        Expense = await expense.findById(req.params.id)
        if (expense == null) {
            return res.status(404).json({ message: 'Cannot find Expense '})
    }
}   catch (err) {
    return res.status(500).json({ message: err.message })
        
    }

    res. expense = expense
    next()
}

module.exports = router