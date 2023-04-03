const express = require("express");
const {CriticalModel} = require("../modal/Critical.modal")
const criticalRouter  = express.Router()




criticalRouter.get("/",async(req,res)=>{
    try {
        const posts=await CriticalModel.find();
        res.send(posts)
    } catch (error) {
        res.send({"msg":"Something went wrong","error":error})
    }
});


criticalRouter.post("/createcriticalpost",async(req,res)=>{
    const payload=req.body;
    try {
        const post=new CriticalModel(payload);
        await post.save();
        res.send("Post has been created")
    } catch (error) {
        res.send({"msg":"Something went wrong","error":error})
    }
});


 module.exports={
        criticalRouter
 }