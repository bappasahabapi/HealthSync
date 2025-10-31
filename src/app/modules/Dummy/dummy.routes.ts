// import express from 'express'
// import { DummyController } from './dummy.controller';

// const router =express.Router();

// router.get("/dummy",DummyController.dummyUser)

// export const demoRoutes =router;


import { Router } from "express";
import { DummyController } from "./dummy.controller";
import { asyncHandler } from "../../middlewares/asyncHandler";

const router = Router();
// router.post("/register", asyncHandler(AuthController.register));
// router.post("/login", asyncHandler(AuthController.login));

// router.get("/",DummyController.dummyUser);
router.get("/",asyncHandler(DummyController.dummyUser));


// export default router;
export const DummyRoutes =router;




//** note:

/* 
1. //todo: if we export like this: 
 export default router;

 then import will be in main route page ex: index.ts
  ->//!fix import {dummyRoutes} from '../modules/Dummy/dummy.routes'
    and use this like
    const routes = [
       { path: '/dummy', route:dummyRoutes  },
    ];
2. //todo: if we export like this
 export const DummyRoutes =router;
 then import will be in main route page ex: index.ts
 ->//!fix import { DummyRoutes } from "../modules/Dummy/dummy.routes";

 const routes = [
   { path: '/dummy', route:DummyRoutes  },
 ];
*/