const mongoose= require("mongoose")
const CountrySchema=mongoose.Schema(
{
    name:{
        type:String,
        required:[true ,"country name is required"]
    },
    president:{
        type:String,
        required:true
    },
    continent:{
            type:String,
            required:true
    },
    population:{
             type:Number,
             required:true
    },
    flag:{
        type:String,
        required:false
    }
}

)
const Country=mongoose.model("country",CountrySchema)
module.exports=Country
