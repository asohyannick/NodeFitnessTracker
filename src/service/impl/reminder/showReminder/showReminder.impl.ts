import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Reminder from "../../../../model/reminder/reminder.model";
const showReminder = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const reminder = await Reminder.findById(id);
        if (!reminder) {
            return res.status(StatusCodes.NOT_FOUND).json({message: "Reminder doesn't exist!"});
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Reminder has been retrieved  successfully from the database",
            reminder
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    showReminder
}