import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { adminService } from "./admin.services";


const getAdmins =async(req:Request, res:Response)=>{

    const result =await adminService.getAdmins()
     res.status(StatusCodes.OK).json({
      success: true,
      message: "✅ Admin data fetched Successfully",
      data: result,
    });
    console.log(result)
}



export const adminCotroller ={
    getAdmins
}