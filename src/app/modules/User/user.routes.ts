import express, { NextFunction, Request, Response } from 'express'
import { userController } from './user.controllers';
import { jwtHelpers } from '../../../helper/jwtHelpers';
import config from '../../../config';
import { Secret } from 'jsonwebtoken';

const router =express.Router();

//!fix: new version: http://localhost:4001/api/v1/user
const auth=(...roles:string[])=>{
    return async (req:Request,res:Response,next:NextFunction)=>{
        // console.log(roles)
        try{

            //1. first get the token
            const token =req.headers.authorization;
            // console.log(token)
            if(!token){throw new Error("You are not authorized.that means no token is present")}


            //2. varify the token
            const varifiedUser =jwtHelpers.varifyToken(token,config.jwt.jwt_secret as Secret);
            // console.log(varifiedUser)

            //3. after get varified data and if role is not prsent in data
            if(roles.length && !roles.includes(varifiedUser.role)){
                throw new Error("You are not varified user. ")
            }

            next()





        }catch(err){
            console.log(err)
        }
    }
}


 router.post("/",auth("ADMIN",'SUPER_ADMIN') ,userController.createAdmin);


// todo: old version: http://localhost:4001/api/v1/user
// router.post("/", userController.createAdmin);
// router.post("/", userController.createPatient);
// router.post("/", userController.createDoctor);
export const userRoutes =router;