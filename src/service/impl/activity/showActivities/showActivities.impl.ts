import { Request, Response } from "express";
import Activity from "../../../../model/activity/activity.model";
import { StatusCodes } from "http-status-codes";
const showActivities = async(_req: Request, res: Response): Promise<Response> => {
 try {
    const activities = await Activity.find();
    return res.status(StatusCodes.OK).json({message: "Activities have been fetched successfully!", activities});
 } catch (error) {
    console.error(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: "Something went wrong!", error});
 }
}

export {
    showActivities
}