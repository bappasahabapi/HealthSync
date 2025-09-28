import { NextFunction, Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { adminService } from "./admin.services";
import pick from "../../../shared/pick";
import { adminFilterableFields } from "./admin.constant";
import { sendResponse } from "../../../shared/sendResponseFormat";
import { catchAsync } from "../../../shared/catchAsync";


const getAdmins: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
      // pick(req.query,keyName)
      const filters = pick(req.query, adminFilterableFields);
      const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);
      const result = await adminService.getAdmins(filters, options);
      sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "✅ Admin data fetched Successfully",
        meta: result?.meta,
        data: result?.data,
      });
      
   
  }
);

const getAdminById = catchAsync(async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req?.params;
    const result = await adminService.getAdminById(id);
    res.status(StatusCodes.OK).json({
      success: true,
      message: "✅ Admin data fetched Successfully by id",
      data: result,
    });
  
})

const updateAdmin = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req?.params;

    const result = await adminService.updateAdminDB(id, req.body);
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: "✅ Admin data updated Successfully",
      data: result,
    });
});
const deleteAdmin = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req?.params;

  try {
    const result = await adminService.deleteAdminDB(id);
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: "✅ Admin data deleted Successfully",
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
});

const softDeleteFromDB = catchAsync(async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req?.params;

  try {
    const result = await adminService.softDeleteFromDB(id);
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: "✅ Admin data deleted Successfully",
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
});

export const adminCotroller = {
  getAdmins,
  getAdminById,
  updateAdmin,
  deleteAdmin,
  softDeleteFromDB,
};
