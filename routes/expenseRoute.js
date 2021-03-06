const express = require('express')
const res = require('express/lib/response')
const router = express.Router()
const expense = require('../models/expense')
// Creating One 
router.post('/', (req, res)=>{

    const post = new expense({
        type: req.body.type,
        amount: req.body.amount,
        description: req.body.description,
        Date: req.body.Date
    })

    //Did not need this as it was giving error [ERR_HEADERS_SENT]
    //res.send(post);

    post.save().then(data =>{
        return res.json(data)
    }).catch(err => {
        return res.json(err).send({
            message:err.message|| "some error occured"
        });
    })
})

router.get('/getAllExpense', async (req, res) => {
    const allExpenses = await expense.find()

    let totalExpense = 0

    allExpenses.forEach(expense => {
        totalExpense += expense.amount
    })

    res.json({ totalExpense })
})

//Getting One
router.get('/:expenseId', getExpense, (req, res) =>{
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
    if (req.body.amount == null) {
        res.status(400).json({ message: "Expense Required"})
        return;
    }
    try {
        const updatedExpense = await expense.findByIdAndUpdate(req.params.id, req.body)
        res.json(updatedExpense)
    } catch (err) {
        res.status(400).json({ message: err.message})
    }
})
//Deleting One
router.delete('/:id', getExpense, async (req, res) => {
    try {
        await res.expense.findByIdAndRemove(req.params.id)
        res.json({ message: 'Deleted Expense' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})


async function getExpense(req, res, next) {
    let Expense
    try {
        Expense = await expense.findById(req.params.id)
        if (Expense == null) {
            return res.status(404).json({ message: 'Cannot find Expense '})
    }
}   catch (err) {
    return res.status(500).json({ message: err.message })
        
    }

    res. expense = expense
    next()
}

module.exports = router