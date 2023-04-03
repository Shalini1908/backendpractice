const express = require("express");
const {MediumModel} = require("../modal/Medium.modal")
const mediumRouter  = express.Router()




mediumRouter .get("/",async(req,res)=>{
    try {
        const posts=await MediumModel.find();
        res.send(posts)
    } catch (error) {
        res.send({"msg":"Something went wrong","error":error})
    }
});


mediumRouter .post("/createmediumpost",async(req,res)=>{
    const payload=req.body;
    try {
        const post=new MediumModel(payload);
        await post.save();
        res.send("Medium Post has been created")
    } catch (error) {
        res.send({"msg":"Something went wrong","error":error})
    }
});


 module.exports={
    mediumRouter 
 }