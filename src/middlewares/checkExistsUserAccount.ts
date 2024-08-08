import { Request, Response, NextFunction } from "express";
import { prisma } from "../dataBase/repositoryClient";

export async function verifyExistsAccountUser(req: Request, res: Response, next: NextFunction) {
    const { userName } = req.body;
    const userExists = await prisma.user.findUnique({ where: { userName } });
    if (userExists) {
        return res.status(400).json({ message: 'Erro: O nome de usuário já existe!' });
    }
    next();
}
