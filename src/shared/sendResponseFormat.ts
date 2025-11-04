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

type IApiReponse<T> = {
  statusCode: number;
  success: boolean;
  message?: string | null;
  meta?: {
    page: number;
    limit: number;
    total: number;
  };
  data?: T | null;
};

export const sendResponse = <T>(res:Response,jsonData:jsonType<T>)=>{
  res.status(jsonData.statusCode).json({
      success: jsonData.success,
      message: jsonData.message,
      meta:jsonData?.meta || null || undefined, 
      data:jsonData?.data || null || undefined,
    });
} ;


//todo: another way to make this.
const sendRespons2 = <T>(res: Response, data: IApiReponse<T>): void => {
  const responseData: IApiReponse<T> = {
    statusCode: data.statusCode,
    success: data.success,
    message: data.message || null,
    meta: data.meta || null || undefined,
    data: data.data || null || undefined,
  };

  res.status(data.statusCode).json(responseData);
};
