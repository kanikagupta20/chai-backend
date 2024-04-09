// require('dotenv').config({path: './env'})
require('dotenv').config({path: './env'})
import connectDB from "./db/index.js"
connectDB()



// import express from "express"

// const app=express()

// ( async()=>{
//   try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

//         app.on("error",()=>{
//             console.log("error" , error);
//             throw error


//         })

//         app.listen(process.env.PORT , ()=>{
//             console.log(`app is listening on port ${
//                 process.env.PORT
//             }`);

//         })
//   }catch(error){
//       console.error("error" , error);


//   }

// })()