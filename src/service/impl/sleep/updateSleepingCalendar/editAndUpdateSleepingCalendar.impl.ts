import Sleep from "../../../../model/sleep/sleep.model";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { SleepProblemStatus, SleepQualityStatus } from "../../../interfac/sleep/sleep.interfac";
const editAndUpdateSleepingCalendar = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const {
            userId,
            duration,
            notes,
            interruptions, //  Number of times the user woke up during the night
        } = req.body;
        const sleepingDuration = await Sleep.findByIdAndUpdate(id,
            {
                userId,
                duration,
                quality: SleepQualityStatus.EXCELLENT,
                date: Date.now(),
                notes,
                sleepStart: Date.now(),
                sleepEnd: Date.now(), //  Time the user woke up
                interruptions, //  Number of times the user woke up during the night
                sleepDisorders: SleepProblemStatus.INSOMNIA, // Optional: Any known sleep disorders
            },
            { new: true, runValidators: true });
        if (!sleepingDuration) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Sleeping calender doesn't exist!" })
        }
        return res.status(StatusCodes.OK).json({ message: "Sleeping  calender has been updated successfully", sleepingDuration});
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    editAndUpdateSleepingCalendar
}