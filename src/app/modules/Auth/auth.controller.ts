import { Request, Response } from "express";
import { catchAsync } from "../../../shared/catchAsync";
import { AuthService } from "./auth.service";
import { sendResponse } from "../../../shared/sendResponseFormat";
import { StatusCodes } from "http-status-codes";
// import httpStatus from 'http-status'

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.loginUser(req.body);

  //7. set refresh token in cookies from controller
  const {refreshToken}=result;
  res.cookie('refreshToken',refreshToken,{
    secure:false, //in devlopment
    httpOnly:true
  });

  res.status(StatusCodes.OK).json({
    success: true,
    message: "User Logged in successfully",
    // data: result,
    data:{
      accessToken:result.accessToken,
      needPasswordChange:result.needPasswordChange
    }
  });
});


export const AuthController={
    loginUser
}