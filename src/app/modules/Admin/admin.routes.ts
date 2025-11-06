import express, { NextFunction, Request, Response } from "express";
import { adminCotroller } from "./admin.controllers";
import { validateRequest } from "../../middlewares/validateRequest";
import { adminValidationSchemas } from "./admin.validation";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";

const router = express.Router();


router.use(auth(UserRole.ADMIN, UserRole.SUPER_ADMIN)); // this will execuate first

router.get("/",
  // auth(UserRole.ADMIN, UserRole.SUPER_ADMIN) ,
  adminCotroller.getAdmins
);
router.get("/:id", adminCotroller.getAdminById);

//todo:left->right exectuation
router.patch(
  "/:id",
  // auth(UserRole.ADMIN, UserRole.SUPER_ADMIN) ,
  validateRequest(adminValidationSchemas.update),
  adminCotroller.updateAdmin
);

router.delete("/:id", 
  // auth(UserRole.ADMIN, UserRole.SUPER_ADMIN) ,
  adminCotroller.deleteAdmin
);
router.delete("/soft/:id",
  // auth(UserRole.ADMIN, UserRole.SUPER_ADMIN) ,
   adminCotroller.softDeleteFromDB
  );

export const adminRoutes = router;
