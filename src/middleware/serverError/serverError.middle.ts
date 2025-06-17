import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
const serverError = (_err: any, _req: Request, res: Response) => {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Something went wrong!",
        status: StatusCodes.INTERNAL_SERVER_ERROR || 'Server Error',
        success: false,
    });
}

export {
    serverError
}