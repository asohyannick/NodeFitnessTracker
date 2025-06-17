import { Document, Types } from "mongoose";
export enum RecurrencePatternStatus {
    DAILY = 'DAILY',
    WEEKLY = 'WEEKLY',
    MONTHLY = 'MONTHLY',
}
export enum ReminderStatus {
    ACTIVE = 'ACTIVE',
    COMPLETED = 'COMPLETED',
    SNOOZED = 'SNOOZED'
}
export interface IReminderInterfac extends Document {
    userId: Types.ObjectId;
    message: string;
    reminderDate: Date;
    isRecurring: boolean, // Optional: Indicates if the reminder is recurring
    recurrencePattern: { // Optional: Details about the recurrence if applicable
        frequency: RecurrencePatternStatus
        interval: number// Optional: Interval for the recurrence
    },
    status: ReminderStatus // Current status of the reminder
    snoozeDuration: number // Optional: Duration for snoozing the reminder (in minutes)
}