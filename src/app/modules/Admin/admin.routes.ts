import express, { NextFunction, Request,Response } from 'express'
import { adminCotroller } from "./admin.controllers";
import {parseAsync, z,ZodObject} from "zod"

const router =express.Router();

const updateAdminValidation =z.object({
    body:z.object({
        name:z.string().nonempty("name can not be empty").optional(),
        contactNumber:z.string().optional()
    })
})

//sit between route and controller [HOF]
const validateRequest=(schema:ZodObject)=>{
   return async (req:Request, res:Response, next:NextFunction)=>{

    // console.log('req-middleware')
    // console.log('data=>',req.body)
    //todo:check validation to req.body data: thats why we need zod package [npm i zod]

    //parse the data
    
    try {
        // await schema.parseAsync(req.body); //!fix this 
        await schema.parseAsync({
            body:req.body
        });  
        return next()
        
    } catch (error) {
        
        next(error) //next only works when we have an error
    }


}
}


router.get('/',adminCotroller.getAdmins);
router.get('/:id',adminCotroller.getAdminById);
//left->right exectuation
router.patch(
    '/:id', 
    validateRequest(updateAdminValidation),
    adminCotroller.updateAdmin
); 

router.delete('/:id',adminCotroller.deleteAdmin);
router.delete('/soft/:id',adminCotroller.softDeleteFromDB);

export const adminRoutes =router;