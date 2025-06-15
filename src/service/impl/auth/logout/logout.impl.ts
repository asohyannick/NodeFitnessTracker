import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
const logout = async(req: Request, res: Response): Promise<Response> => {
    try {
        res.cookie('auth', '', {
            httpOnly: true,
            secure: process.env.JWT_SECRET_KEY as string === 'production',
            maxAge: 90000,
            sameSite: 'strict',
            expires: new Date(0),
        });
        return res.status(StatusCodes.OK).json({message: "User has signed out successfully"})
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: "Something went wrong!", error})
    }
}

export { 
    logout
}