import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { adminService } from "./admin.services";

const pick =<T extends Record<string, unknown>, k extends keyof T> (obj:T, keys:k[]):Partial<T> => {
  // console.log(obj,keys)

  const finalObject: Partial<T> ={};

  for(const key of keys){
    if(obj && Object.hasOwnProperty.call(obj,key)){
      // console.log(key)
      finalObject[key] =obj[key]
    }
  }
  // console.log(finalObject)
  return finalObject;
};

const getAdmins = async (req: Request, res: Response) => {

  try {
    // pick(req.query,keyName)
    const filters = pick(req.query,['name','email','contactNumber','searchTerm'])
    const result = await adminService.getAdmins(filters);
    res.status(StatusCodes.OK).json({
      success: true,
      message: "✅ Admin data fetched Successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: err?.message || " ❌ Something went wrong",
      error: err,
    });
  }
};

export const adminCotroller = {
  getAdmins,
};
