import express from 'express'
import { adminCotroller } from "./admin.controllers";

const router =express.Router();

router.get('/',adminCotroller.getAdmins)
router.get('/:id',adminCotroller.getAdminById)

export const adminRoutes =router;