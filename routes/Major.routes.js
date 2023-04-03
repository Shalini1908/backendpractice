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


majorRouter.patch("/update/:id",async(req,res)=>{
    const id = req.params.id
    const payload  = req.body

   try{
    
    await MajorModel.findByIdAndUpdate({"_id":id},payload)
    res.send({"msg":"Updated Successfully"})
  

   }catch(err){
    console.log(err)
    res.send({"msg":"Something went wrong"})
   }
    })
    
    
    majorRouter.delete("/delete/:id",async(req,res)=>{
        const id = req.params.id
 
       try{

        await MajorModel.findByIdAndDelete({"_id":id})
        res.send({"msg":"Deleted Successfully"})
      
    
       }catch(err){
        console.log(err)
        res.send({"msg":"Something went wrong"})
       }
        })
    


 module.exports={
    majorRouter
 }