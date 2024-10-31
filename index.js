// CREATE HTTPS Server

// approach-1
//  const {createServer}=require('http')
//  const server = createServer((req,res)=>
// {
//     res.end("This response is from server");
// })

//    //assign a port number to server
//      server.listen(3000,()=>
//     {
//         console.log("server is on port 3000...")
//     })



// approach-2
const express= require("express");
const app = express()

// assign port
app.listen(3000,()=>
{
    console.log("app is listening to port 3000")
})

// add body praser middleware
app.use(express.json());

// import user apps
const userApp = require('./APIs/UserApi');

// if paths starts with user-api, then send req to userApi.js
app.use('/user-api',userApp);

// // middleware
// function middleware1(req,res,next)
// {
//     // logic to verify req 
//     console.log("middleware excueted");

//     // send res 
//     // res.send({message:"This res is from middleware"})
//     next()

// }


// function middleware2(req,res,next)
// {
//     console.log("middleware2 excueted");

//     // send res 
//     // res.send({message:"This res is from middleware"})
//     next()
// }

// using Middleware 
    //   app level middleware - means for every request
    // app.use(middleware1)
    // app.use(middleware2)



// Create  USER REST API(routes)

  //test data(it will be replaced with DB later)
