import { Request, Response, NextFunction } from "express";
import { prisma } from "../dataBase/repositoryClient";

export async function verifyExistsUserId(req: Request, res: Response, next: NextFunction) {
    const {id}=req.params;
    const userExists = await prisma.user.findUnique({ where: { id } });
    if (!userExists) {
        return res.status(400).json({ message: 'Erro: Usuário não encontrado no sistema!' });
    }
    next();
}