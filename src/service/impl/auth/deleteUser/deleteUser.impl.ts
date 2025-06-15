import { Request,Response } from "express";
import StatusCodes from 'http-status-codes';
import Auth from '../../../../model/auth/auth.model';
const deleteUser = async(req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const user = await Auth.findByIdAndDelete(id);
        if (!user) {
            return res.status(StatusCodes.NOT_FOUND).json({message: "User doesn't exist!"})
        }
        return res.status(StatusCodes.OK).json({message: "User has been deleted successfully!", user});
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: "Something went wrong", error});
    }
}

export {
    deleteUser
}