import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { adminService } from "./admin.services";
import pick from "../../../shared/pick";
import { adminFilterableFields } from "./admin.constant";


const getAdmins = async (req: Request, res: Response) => {

  try {

    // pick(req.query,keyName)
    const filters = pick(req.query,adminFilterableFields)
    const options =pick(req.query,['limit','page'])
    console.log(options)

    const result = await adminService.getAdmins(filters,options);
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
