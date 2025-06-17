import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
const notFoundRoute = (_req: Request, res: Response) => {
    return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Route doesn't exist",
        status: StatusCodes.NOT_FOUND || 404,
    });
}

export {
    notFoundRoute
}