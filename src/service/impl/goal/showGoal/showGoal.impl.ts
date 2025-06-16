import { Request, Response } from 'express';
import Goal from "../../../../model/goal/goal.model";
import { StatusCodes } from "http-status-codes";
const showGoal = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const goal = await Goal.findById(id);
        if (!goal) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Goal doesn't exist!" })
        }
        return res.status(StatusCodes.OK).json({ message: "Goal have been fetched successfully", goal });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}
export {
    showGoal
}
