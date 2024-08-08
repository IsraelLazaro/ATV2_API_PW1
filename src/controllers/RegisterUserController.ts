import { Request, Response } from "express";
import { ResgisterUser  } from "../model/useCases/RegisterUserCaseUse";

export class RegisterUserController{
    async handle(req: Request, res: Response){
        const {name, userName} = req.body;
        const registerUser = new ResgisterUser();
        const result = await registerUser.execute({name, userName});
        return res.status(result.status).json(result);
    };
};