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

app.use(globalErrorHandler)

export default app;