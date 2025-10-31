import { Request, Response } from "express";
import { DummySerivce } from "./dummy.service";

//todo: moduler pattern
// const demoUser =async(req:Request, res:Response)=>{
//     console.log(req.body)
//     const result =await demoService.demoUser();
//     res.send(result);
// }

// export const demoController={
//     demoUser
// }

//todo: good pattern
export class DummyController{
    static async dummyUser(req:Request, res:Response){
        console.log(req.body)
        const result =await DummySerivce.demoUser();

        res.send(result);
    }
}