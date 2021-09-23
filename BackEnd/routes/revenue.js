const express = require('express');
const Revenue = require('../models/Revenue');
const router= express.Router();

//Get method to get all our Revenue
router.get('/',async (req,res)=>{
    try{
        const revenue= await Revenue.find();
        res.json(revenue);

    }catch(err){
        res.json({message:err});
    }
    
});

router.get('/:month',async (req,res)=>{
    try{
        const revenue= await Revenue.find({month:req.params.month});
        res.json(revenue);

    }catch(err){
        res.json({message:err});
    }
    
});

//Post method to add Tables to our Database
router.post('/',async (req,res)=>{
    const revenue =new Revenue({
        amount:req.body.amount,
        time:req.body.time,
        date:req.body.date,
        month:req.body.month

    });
    try{
    const savedRevenue= await revenue.save()
    res.json(savedRevenue);
    }catch(err){
        res.json({message:err});
    }

});

//Delete table
router.delete('/:revenueId',async (req,res)=>{
    try{
        const removeRevenue= await Revenue.deleteOne({ _id:req.params.revenueId });
        res.json(removeRevenue);
    }catch(err){
        res.json({message:err});
    }
});

module.exports=router;