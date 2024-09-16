let express =require("express")
const { mainRoutes } = require("./App/main.routes")
let app=express()

app.use(mainRoutes)


app.listen("8000")