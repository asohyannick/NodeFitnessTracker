import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
const notFoundRoute = (_req: Request, res: Response) => {
    return res.status(StatusCodes.NOT_FOUND).json({
        message: "Route doesn't exist",
        success: false,
        status: StatusCodes.NOT_FOUND || "Route doesn't exist!",
    });
}

export {
    notFoundRoute
}