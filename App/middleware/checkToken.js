let express=require("express")
 let app=express();

require("dotenv").config()

let checkToken=(req,res,next)=>{
    console.log(req.query.token)
    if (req.query.token==""|| req.query.token==undefined){
        let obj={
            status:0,
            data:'Please Fill the token'
        }
        return res.send(obj)
    }


    if(req.query.token!=123456) {
        console.log(process.env.APITOKEN)
        let obj={
            status:0,
            data:'Please fill the dsgdsf correct token'
        }
        return res.send(obj)
    }

    next()
}

//application.use(checkToken)

// app.get('/slider',checktoken,(req,res)=>{
//     let obj={
//         status:1,
//         data:''
//     }
// })

module.exports ={checkToken}