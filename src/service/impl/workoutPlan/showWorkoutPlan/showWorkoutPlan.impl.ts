import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import WorkoutPlan from "../../../../model/workoutPlan/workoutPlan.model";
const showWorkoutPlan = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
       const workoutPlan = await WorkoutPlan.findById(id);
       if (!workoutPlan) {
         return res.status(StatusCodes.NOT_FOUND).json({message: "Workout plan doesn't exist!"});
       }
       return res.status(StatusCodes.OK).json({
        message: "Workout plan has been retrieved successfully from the database",
        workoutPlan
       });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
   showWorkoutPlan
}