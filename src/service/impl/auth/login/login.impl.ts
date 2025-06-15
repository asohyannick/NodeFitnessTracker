import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Auth from "../../../../model/auth/auth.model";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const login = async (req: Request, res: Response): Promise<Response> => {
    const { email, password } = req.body;
    try {
        const user = await Auth.findOne({ email, isAdmin: true });
        if (!user) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "User doesn't exist!" });
        }
        const matchedPassword = await bcrypt.compare(user.password, password);
        if (!matchedPassword) {
            return res.status(StatusCodes.BAD_REQUEST).json({ message: "Invalid Credentials" });
        }
        const accessToken = jwt.sign({
            id: user._id, email: user.email, isAdmin: user.isAdmin,
            password: user.password
        }, process.env.JWT_SECRET_KEY as string, {
            expiresIn: '15m'
        });
        const refreshToken = jwt.sign({
            id: user._id, isAdmin: user.isAdmin,
            email: user.email, password: user.password
        }, process.env.JWT_SCERET_KEY as string, {
            expiresIn: '7d'
        });
        res.cookie('auth', accessToken, {
            httpOnly: true,
            secure: process.env.JWT_SECRET_KEY as string === 'production',
            maxAge: 90000,
            sameSite: 'strict'
        });
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "User has signed in successfully",
            user: user._id,
            isAdmin: user.isAdmin,
            accessToken,
            refreshToken
        })
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Something went wrong!', error });
    }
}

export {
    login
}