import { Router } from "express";
import { RegisterUserController } from "../controllers/RegisterUserController";
import { verifyExistsAccountUser } from "../middlewares/checkExistsUserAccount";
const routerUser = Router();
const registerUserController = new RegisterUserController();


routerUser.post('/user',verifyExistsAccountUser,registerUserController.handle);

export {routerUser};