const express = require("express");
const {LowModel} = require("../modal/Low.modal")
const lowRouter  = express.Router()




lowRouter.get("/",async(req,res)=>{
    try {
        const posts=await LowModel.find();
        res.send(posts)
    } catch (error) {
        res.send({"msg":"Something went wrong","error":error})
    }
});


lowRouter.post("/createlowpost",async(req,res)=>{
    const payload=req.body;
    try {
        const post=new LowModel(payload);
        await post.save();
        res.send("Low Post has been created")
    } catch (error) {
        res.send({"msg":"Something went wrong","error":error})
    }
});


 module.exports={
lowRouter
 }