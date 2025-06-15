import { Types, Document } from "mongoose";
export interface IAuthInterfac extends Document {
    _id: Types.ObjectId;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    isAdmin: boolean;
    refreshToken: string;

}