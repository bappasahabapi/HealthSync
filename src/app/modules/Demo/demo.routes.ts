import express from 'express'
import { demoController } from './demo.controllers';

const router =express.Router();

router.get("/",demoController.demoUser)

export const demoRoutes =router;