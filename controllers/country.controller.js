const express= require("express")
const Country= require("../models/Country.model")

const createCountry=async (req ,res)=>{
    try{
        const country = await Country.create(req.body);
        res.status(200).json(country)

    }catch (error) {
        res.status(500).json({message:error.message})
    }
}
const getAllCountries=async (req,res)=>{
        try{
            const country =await Country.find({})
            res.status(200).json({country})
        }catch (error) {
              res.status(500).json({message:error.message})
        }
     }
     const getSingleCountry=async (req,res)=>{
            try{
                const { id } =req.params;
                const country=await Country.findById(id);
                res.status(200).json(country)
        
            }catch (error) {
                  res.status(500).json({message:error.message})
             }
         }
         const updateCountry=async (req,res)=>{
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
            }
            const deleteCountry=async (req,res)=>{
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
            }

module.exports={
    createCountry,
    getAllCountries,
    getSingleCountry,
    updateCountry,
    deleteCountry
}