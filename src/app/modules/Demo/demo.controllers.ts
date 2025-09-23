import { Request, Response } from "express";
import { demoService } from "./demo.services";


const demoUser =async(req:Request, res:Response)=>{
    console.log(req.body)
    const result =await demoService.demoUser();
    res.send(result);
}

export const demoController={
    demoUser
}