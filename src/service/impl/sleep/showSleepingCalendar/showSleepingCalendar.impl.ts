import Sleep from "../../../../model/sleep/sleep.model";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
const showSleepingCalendar = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const sleepingDuration = await Sleep.findById(id);
        if (!sleepingDuration) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Sleeping calender doesn't exist!" })
        }
        return res.status(StatusCodes.CREATED).json({ message: "Sleeping duration or calender has been fetched successfully", sleepingDuration });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    showSleepingCalendar
}