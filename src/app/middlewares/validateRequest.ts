import { NextFunction, Request,Response } from "express";
import { AnyZodObject } from "zod";

//sit between route and controller [HOF]
export const validateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    // console.log('req-middleware')
    // console.log('data=>',req.body)
    //todo:check validation to req.body data: thats why we need zod package [npm i zod]
    //parse the data

    try {
      // await schema.parseAsync(req.body); //!fix this
      await schema.parseAsync({
        body: req.body,
      });
      return next();
    } catch (err) {
      next(err); //next only works when we have an error
    }
  };
};