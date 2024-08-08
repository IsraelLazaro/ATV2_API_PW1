import { Request, Response, NextFunction } from "express";
import { prisma } from "../dataBase/repositoryClient";

export async function verifyExistsTechnology(req: Request, res: Response, next: NextFunction) {
    const { title} = req.body;
    if(!title){
        return res.status(400).json({ message: 'Erro: Título da tecnologia ausente.' });
    }
    const existsTechnologie = await prisma.technologies.findFirst({
        where:{
            title:title,
        },
    });
    if (existsTechnologie) {
        return res.status(400).json({ message: 'Erro: O usuário já Domina essa tecnologia!' });
    }
    next();
};