const express = require('express');
const Order = require('../models/Order');
const router= express.Router();

//Get method to get all of our Orders
router.get('/',async (req,res)=>{
    try{
        const orders= await Order.find();
        res.json(orders);

    }catch(err){
        res.json({message:err});
    }
    
});

//Get method to get all of accepted and Dine-In orders
router.get('/d',async (req,res)=>{
    try{
        const orders= await Order.find({status:{$gt:0},type:"DineIn"});
        res.json(orders);

    }catch(err){
        res.json({message:err});
    }
    
});

//Get method to get all of accepted and Take-Away orders
router.get('/t',async (req,res)=>{
    try{
        const orders= await Order.find({status:{$gt:0},type:"TakeAway"});
        res.json(orders);

    }catch(err){
        res.json({message:err});
    }
    
});

//Post method to add Orders to our Database
router.post('/',async (req,res)=>{
    const order =new Order({
        order:req.body.order,
        amount:req.body.amount,
        status:req.body.status,
        type:req.body.type
    });
    try{
    const savedOrder= await order.save()
    res.json(savedOrder);
    }catch(err){
        res.json({message:err});
    }

});

//remove Order
router.delete('/:orderId',async (req,res)=>{
    try{
        const removeOrder= await Order.deleteOne({ _id:req.params.orderId });
        res.json(removeOrder);
    }catch(err){
        res.json({message:err});
    }
});

//Patching request
router.patch('/:orderId',async(req,res)=>{
    try{
        const updateStatus= await Order.updateOne({ _id:req.params.orderId },{$set:{status:req.body.status}});
        res.json(updateStatus);
    }catch(err){
        res.json({message:err});
    }
});

module.exports=router;