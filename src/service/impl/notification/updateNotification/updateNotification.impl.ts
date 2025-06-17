import { Request, Response } from "express";
import Notification from "../../../../model/notification/notification.model";
import { StatusCodes } from "http-status-codes";
import { PriorityStatus, TypeStatus } from "../../../interfac/notification/notification.interfac";
const editAndUpdatePushNoficationMessage = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const {
            message,
            isRead,
            actionRequired,
        } = req.body;
        const notification = await Notification.findByIdAndUpdate(id, {
            message,
            isRead,
            type: TypeStatus.SUCCESS,
            priority: PriorityStatus.MEDIUM,
            actionRequired,
            date: Date.now(),
        }, { new: true, runValidators: true });
        if (!notification) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Notification message  doesn't exist!" })
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Push notification message has been updated successfully from the database",
            notification
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong", error });
    }
}

export {
    editAndUpdatePushNoficationMessage
}