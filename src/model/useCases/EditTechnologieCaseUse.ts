import { prisma } from "../../dataBase/repositoryClient";
import Technologie from "../entities/technologie";

type Params={
    technologieId: string;
    title?:string;
    studeid?:boolean;
    userId?:string;
};
type Result =
    | {status:number, message:string}
    | {status:number, technology:Technologie}

export class UpdateTechnologie{
    async execute({technologieId,title,studeid,userId}:Params): Promise<Result> {
        try {
            const technology = await prisma.technologies.findFirst({
                where: {
                    id: technologieId,
                    userId: userId
                }
            });
            if (!technology) {
                return {message:'Tecnologia não encontrada ou não pertence ao usuário!', status:400};
            };
            const updatedTechnology = await prisma.technologies.update({
                where: { 
                    id:technologieId
                },
                data:{
                    title,
                    studeid,
                    userId,
                }
                });
                return {status:200, technology:updatedTechnology};
            }catch(error){
                return {status:500, message:`Erro desconhecindo`};
        };
    };
};