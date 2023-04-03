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


mediumRouter.patch("/update/:id",async(req,res)=>{
    const id = req.params.id
    const payload  = req.body

   try{
    
    await MediumModel.findByIdAndUpdate({"_id":id},payload)
    res.send({"msg":"Updated Successfully"})
  

   }catch(err){
    console.log(err)
    res.send({"msg":"Something went wrong"})
   }
    })
    
    
    mediumRouter.delete("/delete/:id",async(req,res)=>{
        const id = req.params.id
 
       try{

        await MediumModel.findByIdAndDelete({"_id":id})
        res.send({"msg":"Deleted Successfully"})
      
    
       }catch(err){
        console.log(err)
        res.send({"msg":"Something went wrong"})
       }
        })
    

 module.exports={
    mediumRouter 
 }