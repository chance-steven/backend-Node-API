const express =require("express")
const {createCountry, getAllCountries, getSingleCountry, updateCountry, deleteCountry}=require("../controllers/country.controller")

const router=express.Router()

router.post("/",createCountry)

router.get("/",getAllCountries)

router.get("/:id",getSingleCountry)

router.put("/:id",updateCountry)

router.delete("/:id",deleteCountry)

module.exports=router