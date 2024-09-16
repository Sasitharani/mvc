let express = require("express");
const { mainRoutes } = require("../../main.routes");
let homePageRoute=express.Router();

homePageRoute.get('/slider',(req,res)=>{
    res.send("Welcome to Home page slider API")
})

module.exports ={homePageRoute}