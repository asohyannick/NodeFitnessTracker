import { Request, Response } from "express";
import Activity from "../../../../model/activity/activity.model";
import { StatusCodes } from "http-status-codes";
const deleteActivity = async(req: Request, res: Response): Promise<Response> => {
 try {
    const { id } = req.params;
    const activity = await Activity.findByIdAndDelete(id);
    if (!activity) {
        return res.status(StatusCodes.OK).json({message: "Activity doesn't exist!"});
    }
    return res.status(StatusCodes.OK).json({message: "Activity has been deleted successfully!", activity});
 } catch (error) {
    console.error(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: "Something went wrong!", error});
 }
}

export {
    deleteActivity
}