let express =require("express");
const { homePageRoute } = require("./routes/website/homeapiRoutes");

let mainRoutes=express.Router();

mainRoutes.use("/website/home",homePageRoute)

module.exports={mainRoutes}
