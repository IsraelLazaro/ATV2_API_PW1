import { Request, Response } from "express";
import { UpdateTechnologie } from "../model/useCases/EditTechnologieCaseUse";

export class UpdateTechnologieController{
    async handle(req: Request, res: Response) {
        const { technologieId, title, studeid} = req.body;
        const {id} = req.params;
        const userId = id;
        if (!technologieId || !userId) {
            return res.status(400).json({ error: "ID da tecnologia ou ID do usuário não fornecidos" });
        };
        const updateTechnologie = new UpdateTechnologie();
        const technology = await updateTechnologie.execute({technologieId,title,studeid, userId });
        return res.status(technology.status).json(technology);
    };
};