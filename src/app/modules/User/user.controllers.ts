import { Request, Response } from "express";
import { userService } from "./user.services";
import { StatusCodes } from "http-status-codes";

const createAdmin = async (req: Request, res: Response) => {
  try {
    const result = await userService.createAdmin(req.body);
    // res.send(result);

     res.status(StatusCodes.CREATED).json({
      success: true,
      message: "✅ Admin Created Successfully",
      data: result,
    });
  } catch (error:any) {
    // res.status(500).json({
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({    
        success:false,
        message:error?.name || " ❌ Something went wrong",
        error:error

    })
  }
};

export const userController = {
  createAdmin,
};
