type User = {
    name: string;
    userName: string
    id:string
}

declare namespace Express{
    export interface Request {
        user: User
    }
}