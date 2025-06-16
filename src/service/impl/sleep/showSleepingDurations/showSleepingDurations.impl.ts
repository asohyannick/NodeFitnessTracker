import Sleep from "../../../../model/sleep/sleep.model";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
const showSleepingDurations = async (_req: Request, res: Response): Promise<Response> => {
    try {
        const sleepingDurations = await Sleep.find();
        return res.status(StatusCodes.CREATED).json({ message: "Sleeping durations have  been fetched successfully", sleepingDurations });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    showSleepingDurations
}