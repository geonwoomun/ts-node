import User from '../models/user';

declare module "express-serve-static-core"  {
    export interface Request {
        user?: User
    }
}