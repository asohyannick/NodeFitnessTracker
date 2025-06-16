import { Request, Response } from 'express';
import Goal from "../../../../model/goal/goal.model";
import { StatusCodes } from "http-status-codes";
import { FrequencyStatus, GoalStatus } from "../../../interfac/goal/goal.interfac";
const setGoal = async (req: Request, res: Response): Promise<Response> => {
    const {
        userId,
        type,
        target,
        currentProgress,
        notes,
        milestones,
    } = req.body;
    try {
        const newGoal = new Goal({
            userId,
            type,
            target,
            currentProgress,
            deadline: Date.now(),
            status: GoalStatus.COMPLETED,
            frequency: FrequencyStatus.WEEKLY,
            notes,
            milestones,
        });
        await newGoal.save();
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Goal has been set successfully",
            newGoal
        })
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}
export {
    setGoal
}
