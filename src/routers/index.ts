import { Router } from "express";
import { routerUser } from "./userRouters";
import { routerTechnologie } from "./technologiesRouters";

const routers = Router();
routers.use(routerUser);
routers.use(routerTechnologie);

export {routers};