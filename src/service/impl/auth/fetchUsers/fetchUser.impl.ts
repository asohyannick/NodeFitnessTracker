import { Request,Response } from "express";
import StatusCodes from 'http-status-codes';
import Auth from '../../../../model/auth/auth.model';
const fetchUsers = async(_req: Request, res: Response): Promise<Response> => {
    try {
        const users = await Auth.find();
        return res.status(StatusCodes.OK).json({message: "Users have been fetched successfully!", users});
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: "Something went wrong", error});
    }
}

export {
    fetchUsers
}