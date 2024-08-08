import { prisma } from "../../dataBase/repositoryClient";
import Technologie from "../entities/technologie";

type Params={
    title:string;
    studeid:boolean;
    userId:string;
};

export class RegisterTechnologie {
    async execute({ title, studeid, userId }: Params): Promise<{technologie:Technologie, status:number}> {
        const newTechnologie = await prisma.technologies.create({
            data: {
                title,
                studeid, 
                user: {
                    connect: { 
                        id: userId 
                    } 
                }
            }
        });
        return {technologie:newTechnologie, status:200};
    };
};