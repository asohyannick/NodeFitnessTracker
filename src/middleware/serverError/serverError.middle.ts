import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
const serverError = (_req: Request, res: Response) => {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: "Something went wrong!",
        status: StatusCodes.INTERNAL_SERVER_ERROR || 500,
    });
}

export {
    serverError
}