import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import WorkoutPlan from "../../../../model/workoutPlan/workoutPlan.model";
import { WorkoutGoalPlanStatus } from "../../../interfac/workoutPlan/workoutPlan.interfac";
const editAndUpdateWorkoutPlan = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const {
            title,
            description,
            duration,
            exercises,
        } = req.body;
        const workoutPlan = await WorkoutPlan.findByIdAndUpdate(id, {
            title,
            description,
            goal: WorkoutGoalPlanStatus.HYPERTROPHY,
            duration,
            exercises,
            date: Date.now(),
        }, { new: true, runValidators: true });
        if (!workoutPlan) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Workout plan doesn't exist!" });
        }
        return res.status(StatusCodes.OK).json({
            message: "Workout plan has been updated successfully from the database",
            workoutPlan
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    editAndUpdateWorkoutPlan
}