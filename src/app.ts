import express, { Application, Request, Response } from "express";
import cors from 'cors'
import { userRoutes } from "./app/modules/User/user.routes";
import { demoRoutes } from "./app/modules/Demo/demo.routes";



const app:Application=express()
app.use(cors());

//body parser: without this req.body will be undefined
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/',(req:Request, res:Response)=>{
    res.send({
        Message:"HealthSync Server is running..."
    })
})



const routes = [
  { path: '/api/v1/demo', handler: demoRoutes },
  { path: '/api/v1/user', handler: userRoutes },
];

routes.forEach(route => app.use(route.path, route.handler));


// app.use('/api/v1/demo',demoRoutes)
// app.use('/api/v1/user',userRoutes)

export default app;