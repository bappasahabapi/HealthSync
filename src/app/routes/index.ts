import express from "express";
import { demoRoutes } from "../modules/Demo/demo.routes";
import { userRoutes } from "../modules/User/user.routes";
import { adminRoutes } from "../modules/Admin/admin.routes";
import { DummyRoutes } from "../modules/Dummy/dummy.routes";

// import {dummyRoutes} from '../modules/Dummy/dummy.routes'

const router =express.Router();

// app.use('/api/v1/demo',demoRoutes)
// app.use('/api/v1/user',userRoutes)

const routes = [
  { path: '/demo', route: demoRoutes },
  { path: '/dummy', route:DummyRoutes  },
  // { path: '/dummy', route:dummyRoutes  },
  { path: '/user', route: userRoutes },
  { path: '/admin', route: adminRoutes },
];

routes.forEach(route => router.use(route.path, route.route));


export default router;