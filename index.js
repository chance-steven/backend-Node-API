const express=require("express")
const mongoose= require('mongoose')
require("dotenv").config()
const CountryRouter=require("./routes/country.route")
const app=express();
app.use(express.json())
app.use(express.urlencoded({ extended:false }));

const port=process.env.PORT

app.use("/api/countriez",CountryRouter )



mongoose.connect(process.env.DATABASE_CONNECTION)
.then(()=>{
    console.log("connect to database")
    app.listen(3000, ()=>{
        console.log(`the server is running on ${port}`)
      })
})
.catch(()=>{
    console.log("failed to connect")
})





