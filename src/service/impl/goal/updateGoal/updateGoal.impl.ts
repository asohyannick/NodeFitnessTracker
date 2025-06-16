import { Request, Response } from 'express';
import Goal from "../../../../model/goal/goal.model";
import { StatusCodes } from "http-status-codes";
import { FrequencyStatus, GoalStatus } from '../../../interfac/goal/goal.interfac';
const editAndUpdateGoal = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const {
            type,
            target,
            currentProgress,
            notes,
            milestones,
        } = req.body;
        const goal = await Goal.findByIdAndUpdate(id, {
            type,
            target,
            currentProgress,
            deadline: Date.now(),
            status: GoalStatus.ACTIVE,
            frequency: FrequencyStatus.MONTHLY,
            notes,
            milestones,
        }, { new: true, runValidators: true });
        if (!goal) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Goal doesn't exist!" })
        }
        return res.status(StatusCodes.OK).json({ message: "Goal has been updated successfully", goal });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}
export {
    editAndUpdateGoal
}
