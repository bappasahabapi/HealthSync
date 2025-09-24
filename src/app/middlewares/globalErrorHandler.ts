import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { sendResponse } from "../../shared/sendResponseFormat";

const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {

    console.log('Global Error !!!')
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: err.name || "Something went wrong! from global part",
        error: err
    })
};

export default globalErrorHandler;
