import express, { Request, Response } from 'express'
import { userController } from './user.controllers';

const router =express.Router();

router.post("/", userController.createAdmin);
// router.post("/", userController.createPatient);
// router.post("/", userController.createDoctor);
export const userRoutes =router;