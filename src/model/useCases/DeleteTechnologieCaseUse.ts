import { prisma } from "../../dataBase/repositoryClient";

type Params = {
    technologieId: string;
    userId: string;
};

export class DeleteTechnologies {
    async execute({ technologieId, userId }: Params): Promise<{status:number, message:string}> {
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
            await prisma.technologies.delete({
                where: { 
                    id: technologieId 
                }
            });
            return {message:'Sucesso: Tecnologia foi deletada!', status:200}
        } catch (error) {
            console.log(error)
            return {status:500, message:`Erro desconhecindo`};
        };
    };           
};

