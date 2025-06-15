import { Document, Types } from "mongoose";
export enum MaritalStatus {
    SINGLE = "SINGLE",
    MARRIED = "MARRIED",
}
export interface IProfileInterfac extends Document {
    _id: Types.ObjectId;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    bio: string;
    profilePicture: string;
    maritalStatus:MaritalStatus;
    profession: string;
    country: string;
}