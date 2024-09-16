let express = require("express")

let aboutRoute=express.Router()

aboutRoute.get('/team',(req,res)=>{
    res.send("Welcome to about API -teams")
})

module.exports ={aboutRoute}