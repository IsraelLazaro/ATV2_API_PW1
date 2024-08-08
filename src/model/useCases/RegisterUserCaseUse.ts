import {prisma} from '../../dataBase/repositoryClient';
import User from '../entities/user';

type Params = {
    name: string;
    userName: string
};
type Result =
    | {status:number, message:string}
    | {status:number, user:User}

export class ResgisterUser{
    async execute({name, userName}:Params):Promise< Result>{  
        const newUser = await prisma.user.create({
            data:{
                name,
                userName,
            }
        });
        return { status: 200, user: newUser };
    };
};