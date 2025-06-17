import { Request, Response } from "express";
import Notification from "../../../../model/notification/notification.model";
import { StatusCodes } from "http-status-codes";
const showPushNoficationMessages = async (_req: Request, res: Response): Promise<Response> => {
    try {
        const notifications = await Notification.find();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Push notification messages have been retrieved successfully from the database",
            notifications
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong", error});
    }
}

export { 
    showPushNoficationMessages
}