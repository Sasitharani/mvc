let express =require("express");
const { homePageRoute } = require("./routes/website/homeapiRoutes");
const { aboutRoute } = require("./routes/website/aboutApi");

let mainRoutes=express.Router();

mainRoutes.use("/website/home",homePageRoute)

mainRoutes.use("/website/about",aboutRoute)

module.exports={mainRoutes}
