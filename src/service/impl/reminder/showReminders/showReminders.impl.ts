import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Reminder from "../../../../model/reminder/reminder.model";
const showReminders = async (_req: Request, res: Response): Promise<Response> => {
    try {
        const reminders = await Reminder.find();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Reminders have been retrieved  successfully from the database",
            reminders
        })
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    showReminders
}