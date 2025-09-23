import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { adminService } from "./admin.services";

const getAdmins = async (req: Request, res: Response) => {
  try {
    const result = await adminService.getAdmins(req.query);
    res.status(StatusCodes.OK).json({
      success: true,
      message: "✅ Admin data fetched Successfully",
      data: result,
    });
  } catch (err:any) {
     res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({    
        success:false,
        message:err?.message || " ❌ Something went wrong",
        error:err

    })
  }
};

export const adminCotroller = {
  getAdmins,
};
