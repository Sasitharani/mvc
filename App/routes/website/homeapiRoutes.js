let express = require("express");
const { slider,product } = require("../../controller/website/homeController");

let homePageRoute=express.Router();

homePageRoute.get('/slider',slider)

homePageRoute.get('/product',product)

module.exports ={homePageRoute}