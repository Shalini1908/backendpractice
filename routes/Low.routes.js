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


lowRouter.patch("/update/:id",async(req,res)=>{
    const id = req.params.id
    const payload  = req.body

   try{
    
    await LowModel.findByIdAndUpdate({"_id":id},payload)
    res.send({"msg":"Updated Successfully"})
  

   }catch(err){
    console.log(err)
    res.send({"msg":"Something went wrong"})
   }
    })
    
    
    lowRouter.delete("/delete/:id",async(req,res)=>{
        const id = req.params.id
 
       try{

        await LowModel.findByIdAndDelete({"_id":id})
        res.send({"msg":"Deleted Successfully"})
      
    
       }catch(err){
        console.log(err)
        res.send({"msg":"Something went wrong"})
       }
        })
    



 module.exports={
lowRouter
 }