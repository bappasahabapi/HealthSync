import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { adminService } from "./admin.services";
import pick from "../../../shared/pick";
import { adminFilterableFields } from "./admin.constant";
import { sendResponse } from "../../../shared/sendResponseFormat";


const getAdmins = async (req: Request, res: Response) => {

  try {
    // pick(req.query,keyName)
    const filters = pick(req.query,adminFilterableFields)
    const options =pick(req.query,['limit','page','sortBy','sortOrder']);

    console.log(options)

    const result = await adminService.getAdmins(filters,options);
    
    sendResponse(res,{
      statusCode:StatusCodes.OK,
      success:true,
      message: "✅ Admin data fetched Successfully",
      meta:result?.meta,
      data:result?.data

    })
  } catch (err: any) {
    sendResponse(res, {
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    success: false,
    message: err?.message || "❌ Something went wrong",
    data: null // or you can include the error object if needed
  });
  }
};


const getAdminById =async(req: Request, res: Response)=>{
  const {id} =req?.params;

  try{
    const result =await adminService.getAdminById(id)
      res.status(StatusCodes.OK).json({
      success: true,
      message: "✅ Admin data fetched Successfully by id",
      data: result,
    });
  }catch (err: any) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: err?.message || " ❌ Something went wrong",
      error: err,
    });
  }

};

const updateAdmin =async(req: Request, res: Response)=>{
  const {id} =req?.params;
  console.log(req.body)

   try{
    const result =await adminService.updateAdminDB(id,req.body)
     sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: "✅ Admin data updated Successfully",
      data: result,
    });
  }catch (err: any) {
    sendResponse(res, {
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      success: false,
      message: err?.message || "❌ Something went wrong",
      data: null,
    });
  }
};
const deleteAdmin =async(req: Request, res: Response)=>{
  const {id} =req?.params;

   try{
    const result =await adminService.deleteAdminDB(id)
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: "✅ Admin data deleted Successfully",
      data: result,
    });
  }catch (err: any) {
   sendResponse(res, {
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      success: false,
      message: err?.message || "❌ Something went wrong",
      data: null,
    });
  }
};
const softDeleteFromDB =async(req: Request, res: Response)=>{
  const {id} =req?.params;

   try{
    const result =await adminService.softDeleteFromDB(id)
     sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: "✅ Admin data deleted Successfully",
      data: result,
    });
  }catch (err: any) {
    sendResponse(res, {
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      success: false,
      message: err?.message || "❌ Something went wrong",
      data: null,
    });
  }
};

export const adminCotroller = {
  getAdmins,
  getAdminById,
  updateAdmin,
  deleteAdmin,
  softDeleteFromDB
};
