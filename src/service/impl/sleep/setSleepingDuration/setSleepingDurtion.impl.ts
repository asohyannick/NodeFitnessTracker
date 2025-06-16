import Sleep from "../../../../model/sleep/sleep.model";
import { Request, Response } from "express";
import { SleepQualityStatus, SleepProblemStatus } from "../../../interfac/sleep/sleep.interfac";
import { StatusCodes } from "http-status-codes";
const setSleepingDuration = async (req: Request, res: Response): Promise<Response> => {
    const {
        userId,
        duration,
        notes,
        interruptions, //  Number of times the user woke up during the night
    } = req.body;
    try {
        const newSleepingDuration = new Sleep({
            userId,
            duration,
            quality: SleepQualityStatus.EXCELLENT,
            date: Date.now(),
            notes,
            sleepStart: Date.now(),
            sleepEnd: Date.now(), //  Time the user woke up
            interruptions, //  Number of times the user woke up during the night
            sleepDisorders: SleepProblemStatus.INSOMNIA, // Optional: Any known sleep disorders
        });
        await newSleepingDuration.save();
        return res.status(StatusCodes.CREATED).json({ message: "New sleeping duration has  been created successfully", newSleepingDuration });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    setSleepingDuration
}