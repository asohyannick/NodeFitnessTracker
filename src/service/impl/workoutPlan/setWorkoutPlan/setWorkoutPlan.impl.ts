import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import WorkoutPlan from "../../../../model/workoutPlan/workoutPlan.model";
import { WorkoutGoalPlanStatus } from "../../../interfac/workoutPlan/workoutPlan.interfac";
const createWorkoutPlan = async (req: Request, res: Response): Promise<Response> => {
    const {
        title,
        description,
        duration,
        exercises,
    } = req.body;
    try {
        const newWorkoutPlan = new WorkoutPlan({
            title,
            description,
            goal: WorkoutGoalPlanStatus.STRENGTH,
            duration,
            exercises,
            date: Date.now(),
        });
        await newWorkoutPlan.save();
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Work out plan has been created successfully",
            newWorkoutPlan
        })
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    createWorkoutPlan
}