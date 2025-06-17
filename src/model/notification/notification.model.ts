import mongoose, { Schema } from "mongoose";
import { INotificationInterfac, TypeStatus, PriorityStatus } from "../../service/interfac/notification/notification.interfac";
const notificationSchema: Schema = new Schema<INotificationInterfac>({
    userId: {
        type: Schema.ObjectId,
        ref: 'Auth',
        required: true,
    },
    message: {
        type: String,
        trim: true,
    },
    isRead: {
        type: Boolean,
        default: false,
    },
    type: {
        type: String,
        trim: true,
        enum: Object.values(TypeStatus),
        default: TypeStatus.INFO,
    },
    priority: {
        type: String,
        trim: true,
        enum: Object.values(PriorityStatus),
        default: PriorityStatus.MEDIUM,
    },
    actionRequired: {
        type: Boolean,
        default: false,
    },
    date: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });
const Notification = mongoose.model<INotificationInterfac>('Notification', notificationSchema)
export default Notification