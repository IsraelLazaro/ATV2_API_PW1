import Technologie from "./technologie";

export default interface User{
    id: string;
    name: string;
    userName: string;
    technologies?: Technologie[];
}