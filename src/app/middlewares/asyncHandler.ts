//todo: for test purpose of dummy user

import { Request, Response, NextFunction, RequestHandler } from "express";

export function asyncHandlerOld(fn: any) {
  return function (req: Request, res: Response, next: NextFunction) {
    fn(req, res, next).catch(next);
  };
}

export const asyncHandler = (fn: RequestHandler) => {
  // export const catchAsync = (fn: RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};

export class AsyncSync {
  // Keeps the original style: a function that accepts a handler and returns a new function
  public static asyncHandlerOld(
    fn: any
  ): (req: Request, res: Response, next: NextFunction) => void {
    return function (req: Request, res: Response, next: NextFunction) {
      // Ensure the function returns a promise and catch errors
      Promise.resolve(fn(req, res, next)).catch(next);
    };
  }

  // Strongly-typed version using Express's RequestHandler type
  public static asyncHandler(fn: RequestHandler): RequestHandler {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        await fn(req, res, next);
      } catch (err) {
        next(err);
      }
    };
  }
}
