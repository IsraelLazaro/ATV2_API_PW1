import { Request, Response } from "express";
import { FindAllTechnologies } from "../model/useCases/FindAllTechnologiesCaseUse";


export class FindAllTechnologiesController{
    async handle(req: Request, res: Response){
        const findAllTechnologies = new FindAllTechnologies();
        const {id}=req.params;
        const allTechnologies = await findAllTechnologies.execute({id});
        return res.status(200).json(allTechnologies);
    }
};