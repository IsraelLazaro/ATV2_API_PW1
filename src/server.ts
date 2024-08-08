import  express  from "express";
import cors from 'cors';
import { routers } from "./routers";

const api = express();

api.use(express.json());
api.use(cors());
api.use(routers);

api.listen(3000, () => {
    console.log('Server online On Port 3000')
});  