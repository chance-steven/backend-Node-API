const express=require("express")
const mongoose= require('mongoose')

const Country = require('./models/Country.models');
const app=express();
app.use(express.json())
app.use(express.urlencoded({ extended:false }));
//create country
app.post("/api/countriez", async (req ,res)=>{
    try{
        const country = await Country.create(req.body);
        res.status(200).json(country)

    }catch (error) {
        res.status(500).json({message:error.message})
    }
})
//get all countriez
app.get("/api/countriez", async (req,res)=>{
    try{
       const country =await Country.find({})
       res.status(200).json({country})
    }catch (error) {
           res.status(500).json({message:error.message})
    }
})
//get single country
app.get("/api/countriez/:id", async (req,res)=>{
    try{
        const { id } =req.params;
        const country=await Country.findById(id);
        res.status(200).json(country)

    }catch (error) {
          res.status(500).json({message:error.message})
    }
})
//update country
app.put("/api/countriez/:id",async (req,res)=>{
    try{
        const { id } =req.params;
        const country =await Country.findByIdAndUpdate(id,
            req.body
        )
        if(!country){
           return res.status(404).json({message:"country not found"})
        }
        res.status(200).json({message:"country successfully updated"})
    }catch (error) {
           res.status(500).json({message:error.message})
    }
})

app.delete("/api/countriez/:id", async (req,res)=>{
    try{
        const { id }=req.params;
        const country= await Country.findByIdAndDelete(id)
        if(!country){
            res.status(404).json({message:"country not found"})
        }
         res.status(200).json({message:"country deleted successfully"})
    }catch (error){
         res.status(500).json({message:error.message})
    }
})

app.listen(3000, ()=>{
  console.log("the server is running on port 3000")
})
mongoose.connect("mongodb+srv://michelhategekimana127:UG5Z2sSayVHMjH6B@cluster0.0rygj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connect to database")
})
.catch(()=>{
    console.log("failed to connect")
})





