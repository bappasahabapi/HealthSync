import express from 'express'
import { adminCotroller } from "./admin.controllers";

const router =express.Router();

router.get('/',adminCotroller.getAdmins);
router.get('/:id',adminCotroller.getAdminById);
router.patch('/:id',adminCotroller.updateAdmin);
router.delete('/:id',adminCotroller.deleteAdmin);
router.delete('/soft/:id',adminCotroller.softDeleteFromDB);

export const adminRoutes =router;