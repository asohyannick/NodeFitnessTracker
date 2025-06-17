import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Reminder from "../../../../model/reminder/reminder.model";
import { ReminderStatus, RecurrencePatternStatus } from "../../../interfac/reminder/reminder.interfac";
const sendReminder = async (req: Request, res: Response): Promise<Response> => {
    const {
        message,
        isRecurring, // Optional: Indicates if the reminder is recurring
        snoozeDuration, // Optional: Duration for snoozing the reminder (in minutes)
    } = req.body;
    try {
        const newReminder = new Reminder({
            message,
            reminderDate: Date.now(),
            isRecurring,
            recurrencePattern: RecurrencePatternStatus.WEEKLY,
            status: ReminderStatus.COMPLETED,
            snoozeDuration
        });
        await newReminder.save();
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Reminder message has been send successfully",
            newReminder
        })
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    sendReminder
}