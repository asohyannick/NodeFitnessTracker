import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import WorkoutPlan from "../../../../model/workoutPlan/workoutPlan.model";
const showWorkoutPlans = async (_req: Request, res: Response): Promise<Response> => {
    try {
       const workoutPlans = await WorkoutPlan.find();
       return res.status(StatusCodes.OK).json({
        message: "Workout plans have been retrieved successfully from the database",
        workoutPlans
       });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
   showWorkoutPlans
}