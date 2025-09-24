import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { adminService } from "./admin.services";
import pick from "../../../shared/pick";
import { adminFilterableFields } from "./admin.constant";




const getAdmins = async (req: Request, res: Response) => {

  try {

    // pick(req.query,keyName)
    const filters = pick(req.query,adminFilterableFields)
    const options =pick(req.query,['limit','page','sortBy','sortOrder']);

    console.log(options)

    const result = await adminService.getAdmins(filters,options);
    res.status(StatusCodes.OK).json({
      success: true,
      message: "✅ Admin data fetched Successfully",
      // data: result,
      meta:result?.meta,
      data:result?.data
    });
  } catch (err: any) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: err?.message || " ❌ Something went wrong",
      error: err,
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
      res.status(StatusCodes.OK).json({
      success: true,
      message: "✅ Admin data updated Successfully",
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
const deleteAdmin =async(req: Request, res: Response)=>{
  const {id} =req?.params;

   try{
    const result =await adminService.deleteAdminDB(id)
      res.status(StatusCodes.OK).json({
      success: true,
      message: "✅ Admin data deleted Successfully",
      data: result,
    });
  }catch (err: any) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: err?.name || " ❌ Something went wrong",
      error: err,
    });
  }
};

export const adminCotroller = {
  getAdmins,
  getAdminById,
  updateAdmin,
  deleteAdmin
};
