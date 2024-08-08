import { Request, Response } from "express";
import { DeleteTechnologies } from "../model/useCases/DeleteTechnologieCaseUse";

export class DeleteTechnologieController {
    async handle(req: Request, res: Response) {
        const { technologieId} = req.body;
        const {id} = req.params;
        const userId = id;
        if (!technologieId || !userId) {
            return res.status(400).json({ error: "ID da tecnologia ou ID do usuário não fornecidos" });
        };
        const deleteTechnologie = new DeleteTechnologies();
        const technology = await deleteTechnologie.execute({ technologieId, userId });
        return res.status(technology.status).json(technology.message);
    };
};
