const express = require('express');
const router= express.Router();
const Issue=require('../models/Issue');



//Get method to get all our Issues
router.get('/',async (req,res)=>{
    try{
        const issue= await Issue.find();
        res.json(issue);

    }catch(err){
        res.json({message:err});
    }
    
});

//Post method to add Issues to our Database
router.post('/',async (req,res)=>{
    const issue =new Issue({
        title:req.body.title,
        description:req.body.description,
        author:req.body.author
    });
    try{
    const savedIssue= await issue.save()
    res.json(savedIssue);
    }catch(err){
        res.json({message:err});
    }

});

//Delete post
router.delete('/:complainId',async (req,res)=>{
    try{
        const removeIssue= await Issue.deleteOne({ _id:req.params.complainId });
        res.json(removeIssue);
    }catch(err){
        res.json({message:err});
    }
});

//Update an Issue
router.patch('/:complainId',async(req,res)=>{
    try{
        const updateIssue= await Issue.updateOne({ _id:req.params.complainId },{$set:{description:req.body.description}});
        res.json(updateIssue);
    }catch(err){
        res.json({message:err});
    }
});

module.exports=router;