import express, { NextFunction, Request, Response } from "express";
import { adminCotroller } from "./admin.controllers";
import { validateRequest } from "../../middlewares/validateRequest";
import { adminValidationSchemas } from "./admin.validation";

const router = express.Router();

router.get("/", adminCotroller.getAdmins);
router.get("/:id", adminCotroller.getAdminById);

//todo:left->right exectuation
router.patch(
  "/:id",
  validateRequest(adminValidationSchemas.update),
  adminCotroller.updateAdmin
);

router.delete("/:id", adminCotroller.deleteAdmin);
router.delete("/soft/:id", adminCotroller.softDeleteFromDB);

export const adminRoutes = router;
