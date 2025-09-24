import { Request, Response } from "express";


type jsonType<T> ={
  statusCode:number,
  success:boolean,
  message:string,
  meta?:{
    page:number,
    limit:number,
    total:number,
  },
  data:T | null | undefined
}

export const sendResponse = <T>(res:Response,jsonData:jsonType<T>)=>{
  res.status(jsonData.statusCode).json({
      success: jsonData.success,
      message: jsonData.message,
      meta:jsonData?.meta || null || undefined, 
      data:jsonData?.data || null || undefined,
    });
} ;