import express from 'express'
import { adminCotroller } from "./admin.controllers";



const router =express.Router();

router.get('/',adminCotroller.getAdmins)

export const adminRoutes =router;