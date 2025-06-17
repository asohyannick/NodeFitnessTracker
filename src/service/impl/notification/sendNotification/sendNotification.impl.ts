import { Request, Response } from "express";
import Notification from "../../../../model/notification/notification.model";
import { PriorityStatus, TypeStatus } from "../../../interfac/notification/notification.interfac";
import { StatusCodes } from "http-status-codes";
const sendPushNoficationMessage = async (req: Request, res: Response): Promise<Response> => {
    const {
        message,
        isRead,
        actionRequired,
    } = req.body;
    try {
        const newNotification = new Notification({
            message,
            isRead,
            type: TypeStatus.SUCCESS,
            priority: PriorityStatus.HIGH,
            actionRequired,
            date: Date.now(),
        });
        await newNotification.save();
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "A new push notification message has been send successfully",
            newNotification
        })
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong", error});
    }
}

export { 
    sendPushNoficationMessage
}