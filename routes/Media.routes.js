const express = require("express");
const {MediaModel} = require("../modal/Media.modal")
const mediaRouter  = express.Router()




mediaRouter .get("/",async(req,res)=>{
    try {
        const posts=await MediaModel.find();
        res.send(posts)
    } catch (error) {
        res.send({"msg":"Something went wrong","error":error})
    }
});


mediaRouter .post("/createmediapost",async(req,res)=>{
    const payload=req.body;
    try {
        const post=new MediaModel(payload);
        await post.save();
        res.send("Medium Post has been created")
    } catch (error) {
        res.send({"msg":"Something went wrong","error":error})
    }
});


mediaRouter.patch("/update/:id",async(req,res)=>{
    const id = req.params.id
    const payload  = req.body

   try{
    
    await MediaModel.findByIdAndUpdate({"_id":id},payload)
    res.send({"msg":"Updated Successfully"})
  

   }catch(err){
    console.log(err)
    res.send({"msg":"Something went wrong"})
   }
    })
    
    
    mediaRouter.delete("/delete/:id",async(req,res)=>{
        const id = req.params.id
 
       try{

        await MediaModel.findByIdAndDelete({"_id":id})
        res.send({"msg":"Deleted Successfully"})
      
    
       }catch(err){
        console.log(err)
        res.send({"msg":"Something went wrong"})
       }
        })
    

 module.exports={
    mediaRouter 
 }