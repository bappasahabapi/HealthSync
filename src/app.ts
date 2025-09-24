import express, { Application, NextFunction, Request, Response } from "express";
import cors from 'cors'
import router from "./app/routes";
import { StatusCodes } from "http-status-codes";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";



const app:Application=express()
app.use(cors());

//body parser: without this req.body will be undefined
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/',(req:Request, res:Response)=>{
    res.send({
        Message:"HealthSync Server is running..."
    })
})

app.use('/api/v1',router)

//* this line execute because of we use next() in controller .
app.use(globalErrorHandler);

//** if miss the global error handler then this part call
app.use((req:Request, res:Response,next:NextFunction)=>{
  // console.log(req)
  res.status(StatusCodes.NOT_FOUND).json({
    success:false,
    message:"API NOT FOUND",
    error:{
      path:req.originalUrl,
      message:"Your requested path is not found"
    }
  })
})

export default app;