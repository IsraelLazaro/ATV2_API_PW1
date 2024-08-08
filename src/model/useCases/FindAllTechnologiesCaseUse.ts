import { prisma } from "../../dataBase/repositoryClient";
import Technologie from "../entities/technologie";

type Params={
    id:string;
};

export class FindAllTechnologies{
    async execute({id}:Params):Promise<Technologie[]>{
        const tecnologies = await prisma.technologies.findMany({
            where:{
                userId:id
            }
            });
            return tecnologies;
    };
};