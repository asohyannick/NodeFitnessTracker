import { Request,Response } from "express";
import StatusCodes from 'http-status-codes';
import Auth from '../../../../model/auth/auth.model';
import jwt,  {JwtPayload} from 'jsonwebtoken';
const newAccessToken = async(req: Request, res: Response): Promise<Response> => {
    const { refreshToken} = req.body;
    try {
        if (!refreshToken) {
            return res.status(StatusCodes.NOT_FOUND).json({message: "Invalid Token"});
        }
        const userPayload = jwt.verify(refreshToken, process.env.JWT_SECRET_KEY as string) as JwtPayload;
        const user = await Auth.findById(userPayload.id);
        if (!user || user.refreshToken !== refreshToken) {
            return res.status(StatusCodes.NOT_FOUND).json({message: "Invalid Credentials"});
        }
        const accessToken = jwt.sign({userId: user.id}, process.env.JWT_SECRET_KEY as string, {
            expiresIn: '7d'
        });
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "This is the new access token which you requested for.",
            accessToken
        })
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: "Something went wrong", error});
    }
}

export {
    newAccessToken
}