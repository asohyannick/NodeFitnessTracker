import { Request, Response } from "express";
import Activity from "../../../../model/activity/activity.model";
import { MoodStatus, InstensityStatus } from "../../../interfac/activity/activity.interfac";
import { StatusCodes } from "http-status-codes";
const createActivity = async(req: Request, res: Response): Promise<Response> => {
    const { 
        type, duration, caloriesBurned, notes, location, heartRate, distance, equipment
    } = req.body;
 try {
    const newActivity = new Activity({
        type,
        duration,
        caloriesBurned,
        notes,
        location,
        intensity: InstensityStatus.HIGH,
        heartRate,
        distance,
        equipment,
        mood: MoodStatus.HAPPY,
        date: Date.now(),
    });
    await newActivity.save();
    return res.status(StatusCodes.CREATED).json({
        success: true,
        message: "A new activity has been created successfully",
        newActivity
    });
 } catch (error) {
    console.error(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: "Something went wrong!", error});
 }
}

export {
    createActivity
}