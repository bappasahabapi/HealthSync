import express, { NextFunction, Request, Response } from 'express'
import { userController } from './user.controllers';
import auth from '../../middlewares/auth';

const router =express.Router();

// router.use(auth(UserRole.ADMIN, UserRole.SUPER_ADMIN)); // this will execuate first

//!fix: new version: http://localhost:4001/api/v1/user
// router.post("/", userController.createAdmin);
 router.post("/",auth("ADMIN",'SUPER_ADMIN') ,userController.createAdmin);


// todo: old version: http://localhost:4001/api/v1/user
// router.post("/", userController.createPatient);
// router.post("/", userController.createDoctor);
export const userRoutes =router;