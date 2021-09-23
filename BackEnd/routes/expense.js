const express = require('express');
const Expense = require('../models/Expense');
const router= express.Router();

//Get method to get all our Expenses
router.get('/',async (req,res)=>{
    try{
        const expense= await Expense.find();
        res.json(expense);

    }catch(err){
        res.json({message:err});
    }
    
});

router.get('/:month',async (req,res)=>{
    try{
        const expense= await Expense.find({month:req.params.month});
        res.json(expense);

    }catch(err){
        res.json({message:err});
    }
    
});

//Post method to add Tables to our Database
router.post('/',async (req,res)=>{
    const expense =new Expense({
        amount:req.body.amount,
        time:req.body.time,
        date:req.body.date,
        type:req.body.type,
        month:req.body.month

    });
    try{
    const savedExpense= await expense.save()
    res.json(savedExpense);
    }catch(err){
        res.json({message:err});
    }

});

//Delete table
router.delete('/:expenseId',async (req,res)=>{
    try{
        const removeExpense= await Expense.deleteOne({ _id:req.params.expenseId });
        res.json(removeExpense);
    }catch(err){
        res.json({message:err});
    }
});

module.exports=router;