import { Request, Response } from "express";
import { RegisterTechnologie } from "../model/useCases/RegisterTechnologieCaseUse";

export class RegisterTechnologieController{
    async handle(req: Request, res: Response){
        const { title, studeid} = req.body ;
        const {id} = req.params;
        const userId = id;
        const registerTechnologie = new RegisterTechnologie();
        const result = await registerTechnologie.execute({ title, studeid, userId });
        return res.status(result.status).json(result);
    };
};