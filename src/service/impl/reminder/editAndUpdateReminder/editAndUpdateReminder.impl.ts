import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Reminder from "../../../../model/reminder/reminder.model";
import { RecurrencePatternStatus, ReminderStatus } from "../../../interfac/reminder/reminder.interfac";
const editAndUpdateReminder = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const {
            message,
            isRecurring,
            snoozeDuration
        } = req.body;
        const reminder = await Reminder.findByIdAndUpdate(id,
            {
                message,
                reminderDate: Date.now(),
                isRecurring,
                recurrencePattern: RecurrencePatternStatus.MONTHLY,
                status: ReminderStatus.COMPLETED,
                snoozeDuration
            },
            { new: true, runValidators: true }
        );
        if (!reminder) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Reminder doesn't exist!" });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Reminder has been updated  successfully from the database",
            reminder
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    editAndUpdateReminder
}