let express = require("express");
const { mainRoutes } = require("../../mainRoutes");
let homePageRoute=express.Router();

homePageRoute.get('/slider',(req,res)=>{
    res.send("Welcome to Home page slider API")
})

module.exports ={homePageRoute}