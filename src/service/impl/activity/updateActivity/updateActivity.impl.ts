import { Request, Response } from "express";
import Activity from "../../../../model/activity/activity.model";
import { StatusCodes } from "http-status-codes";
import { InstensityStatus, MoodStatus } from "../../../interfac/activity/activity.interfac";
const editAndUpdateActivity = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const {
            type,
            duration,
            caloriesBurned,
            notes,
            location,
            heartRate,
            distance,
            equipment,
        } = req.body;
        const activity = await Activity.findByIdAndUpdate(
            id,
            {
                type,
                duration,
                caloriesBurned,
                notes,
                location,
                intensity: InstensityStatus.MODERATE,
                heartRate,
                distance,
                equipment,
                mood: MoodStatus.NEUTRAL,
                date: Date.now(),
            }, { new: true, runValidators: true });
        if (!activity) {
            return res.status(StatusCodes.OK).json({ message: "Activity doesn't exist!" });
        }
        return res.status(StatusCodes.OK).json({ message: "Activity has been updated successfully!", activity });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    editAndUpdateActivity
}