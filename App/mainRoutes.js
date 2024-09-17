let express =require("express");
const { homePageRoute } = require("./routes/website/homeapiRoutes");
const { aboutRoute } = require("./routes/website/aboutApi");
const { checkToken } = require("./middleware/checkToken");

let mainRoutes=express.Router();

mainRoutes.use("/website/home",checkToken,homePageRoute)

mainRoutes.use("/website/about",aboutRoute)

module.exports={mainRoutes}