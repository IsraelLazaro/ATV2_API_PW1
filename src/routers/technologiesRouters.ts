import { Router } from "express";
import { RegisterTechnologieController } from "../controllers/RegisterTechnologieController";
import { FindAllTechnologiesController } from "../controllers/FindAllTechnologies";
import { DeleteTechnologieController } from "../controllers/DeleteTechnologieController";
import { UpdateTechnologieController } from "../controllers/EditTechnologieController";
import { verifyExistsTechnology } from "../middlewares/checkExistsTechnology";
import { verifyExistsUserId } from "../middlewares/checkIdUserExists";

const routerTechnologie = Router();

const registerTechnologieController = new RegisterTechnologieController();
routerTechnologie.post('/technologie/:id', verifyExistsUserId,verifyExistsTechnology, registerTechnologieController.handle);
const findAlltechnologiesController = new FindAllTechnologiesController()
routerTechnologie.get('/technologie/:id', verifyExistsUserId, findAlltechnologiesController.handle);
const deleteTechnologieController = new DeleteTechnologieController();
routerTechnologie.delete('/technologie/:id', verifyExistsUserId, deleteTechnologieController.handle);
const updateTechnologieController = new UpdateTechnologieController();
routerTechnologie.put('/technologie/:id', verifyExistsUserId, updateTechnologieController.handle);

export {routerTechnologie};

