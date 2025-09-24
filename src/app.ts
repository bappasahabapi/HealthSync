import express, { Application, NextFunction, Request, Response } from "express";
import cors from 'cors'
import router from "./app/routes";
import { StatusCodes } from "http-status-codes";



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

app.use((err:Error,req:Request, res:Response,next:NextFunction)=>{
  console.log('Global Error!!!')
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    success:false,
    message:err.name || "Something went worong from global part",
    error: err

  })
})

export default app;