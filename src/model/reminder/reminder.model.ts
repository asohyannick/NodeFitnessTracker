import { IReminderInterfac, RecurrencePatternStatus, ReminderStatus } from '../../service/interfac/reminder/reminder.interfac';
import mongoose, { Schema } from "mongoose";
const reminderSchema: Schema = new Schema<IReminderInterfac>({
    userId: {
        type: Schema.ObjectId,
        ref: 'Auth',
        required: true,
    },
    message: {
        type: String,
        trim: true,
    },
    reminderDate: {
        type: Date,
        default: Date.now,
    },
    isRecurring: {
        type: Boolean,
        default: false,
    },
    recurrencePattern: {
        frequency: {
            type: String,
            trim: true,
            enum: Object.values(RecurrencePatternStatus),
            default: RecurrencePatternStatus.DAILY,
        },
        interval: {
            type: Number,
        },
    },
    status: {
        type: String,
        trim: true,
        enum: Object.values(ReminderStatus),
        default: ReminderStatus.ACTIVE,
    },
    snoozeDuration: {
        type: Number,
    },
}, { timestamps: true });
const Reminder = mongoose.model<IReminderInterfac>('Reminder', reminderSchema);
export default Reminder;