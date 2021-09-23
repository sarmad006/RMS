const express = require('express');
const Table = require('../models/Table');
const router= express.Router();


//Get method to get all our Table
router.get('/',async (req,res)=>{
    try{
        const tables= await Table.find();
        res.json(tables);

    }catch(err){
        res.json({message:err});
    }
    
});

//Get method to get all Reserved tables
router.get('/r',async (req,res)=>{
    try{
        const tables= await Table.find({status:"Reserved"});
        res.json(tables);

    }catch(err){
        res.json({message:err});
    }
    
});

//Get method to get all UnReserved tables
router.get('/u',async (req,res)=>{
    try{
        const tables= await Table.find({status:"Free"});
        res.json(tables);

    }catch(err){
        res.json({message:err});
    }
    
});

//Post method to add Tables to our Database
router.post('/',async (req,res)=>{
    const table =new Table({
        number:req.body.number,
        seats:req.body.seats,
        status:req.body.status
    });
    try{
    const savedTable= await table.save()
    res.json(savedTable);
    }catch(err){
        res.json({message:err});
    }

});

//Delete table
router.delete('/:tableId',async (req,res)=>{
    try{
        const removeTable= await Table.deleteOne({ _id:req.params.tableId });
        res.json(removeTable);
    }catch(err){
        res.json({message:err});
    }
});

router.patch('/:tableId',async(req,res)=>{
    try{
        const updateStatus= await Table.updateOne({ _id:req.params.tableId },{$set:{status:req.body.status}});
        res.json(updateStatus);
    }catch(err){
        res.json({message:err});
    }
});

module.exports=router;