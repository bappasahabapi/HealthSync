import { Request, Response } from "express";
import { demoService } from "./demo.services";


const demoUser =async(req:Request, res:Response)=>{
    const result =await demoService.demoUser();
    console.log(result)

    res.send(result);
}

export const demoController={
    demoUser
}