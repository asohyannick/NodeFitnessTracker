import { Request, Response } from "express";
import Notification from "../../../../model/notification/notification.model";
import { StatusCodes } from "http-status-codes";
const deletePushNoficationMessage = async (req:Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const notification = await Notification.findByIdAndDelete(id);
        if (!notification) {
            return res.status(StatusCodes.NOT_FOUND).json({message: "Notification message doesn't exist!"})
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Push notification message has been deleted successfully from the database",
            notification
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong", error});
    }
}

export { 
    deletePushNoficationMessage
}