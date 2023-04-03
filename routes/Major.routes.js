const express = require("express");
const {MajorModel} = require("../modal/Major.modal")
const majorRouter  = express.Router()




majorRouter.get("/",async(req,res)=>{
    try {
        const posts=await MajorModel.find();
        res.send(posts)
    } catch (error) {
        res.send({"msg":"Something went wrong","error":error})
    }
});


majorRouter.post("/createmajorpost",async(req,res)=>{
    const payload=req.body;
    try {
        const post=new MajorModel(payload);
        await post.save();
        res.send("Major Post has been created")
    } catch (error) {
        res.send({"msg":"Something went wrong","error":error})
    }
});


 module.exports={
    majorRouter
 }