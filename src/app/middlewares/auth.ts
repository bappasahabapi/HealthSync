import { Secret } from "jsonwebtoken";
import config from "../../config";
import { jwtHelpers } from "../../helper/jwtHelpers";
import { Request,Response,NextFunction } from "express";
import ApiError from "../error/ApiError";
import { StatusCodes } from "http-status-codes";

const auth = (...roles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    // console.log(roles)
    try {
      //1. first get the token
      const token = req.headers.authorization;
      // console.log(token)
      if (!token) {
        // throw new Error( "You are not authorized.that means no token is present");
        throw new ApiError(StatusCodes.UNAUTHORIZED, "You are not authorized.that means no token is present");

      }

      //2. varify the token
      const varifiedUser = jwtHelpers.varifyToken(
        token,
        config.jwt.jwt_secret as Secret
      );
      // console.log(varifiedUser)

      //3. after get varified data and if role is not prsent in data
      if (roles.length && !roles.includes(varifiedUser.role)) {
        throw new ApiError(StatusCodes.FORBIDDEN,"Forbitten ");
      }

      next();
    } catch (err) {
      console.log(err);
    }
  };
};


export default auth
