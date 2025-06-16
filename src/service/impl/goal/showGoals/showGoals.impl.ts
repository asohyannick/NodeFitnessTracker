import { Request, Response } from 'express';
import Goal from "../../../../model/goal/goal.model";
import { StatusCodes } from "http-status-codes";
const showGoals = async (_req: Request, res: Response): Promise<Response> => {
    try {
      const goals = await Goal.find();
      return res.status(StatusCodes.OK).json({message: "Goals have been fetched successfully", goals});
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}
export {
    showGoals
}
