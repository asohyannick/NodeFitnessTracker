import Sleep from "../../../../model/sleep/sleep.model";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
const deleteSleepingCalendar = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const sleepingDuration = await Sleep.findByIdAndDelete(id);
        if (!sleepingDuration) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Sleeping calender doesn't exist!" })
        }
        return res.status(StatusCodes.OK).json({ message: "Sleeping calender has been deleted successfully", sleepingDuration });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    deleteSleepingCalendar
}