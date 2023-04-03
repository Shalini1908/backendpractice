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


criticalRouter.patch("/update/:id",async(req,res)=>{
    const id = req.params.id
    const payload  = req.body

   try{
    
    await CriticalModel.findByIdAndUpdate({"_id":id},payload)
    res.send({"msg":"Updated Successfully"})
  

   }catch(err){
    console.log(err)
    res.send({"msg":"Something went wrong"})
   }
    })
    
    
    criticalRouter.delete("/delete/:id",async(req,res)=>{
        const id = req.params.id
 
       try{

        await CriticalModel.findByIdAndDelete({"_id":id})
        res.send({"msg":"Deleted Successfully"})
      
    
       }catch(err){
        console.log(err)
        res.send({"msg":"Something went wrong"})
       }
        })
    


 module.exports={
        criticalRouter
 }