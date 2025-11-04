import express, { Request, Response } from 'express'
import { AuthController } from './auth.controller';


const router =express.Router();

router.post(
    "/login", 
    AuthController.loginUser

);
export const AuthRoutes =router;