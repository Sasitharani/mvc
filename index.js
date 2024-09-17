let express =require("express")
const { mainRoutes } = require("./App/mainRoutes")
let app=express()

app.use(mainRoutes)


app.listen("8000")