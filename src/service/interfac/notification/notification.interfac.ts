import { Date, Document, Types } from 'mongoose';
export enum TypeStatus {
    INFO = 'INFO',
    WARNING = 'WARNING',
    ERROR = 'ERROR',
    SUCCESS = 'SUCCESS',
}

export enum PriorityStatus {
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH',
}
export interface INotificationInterfac extends Document {
  userId: Types.ObjectId;
  message: string;
  isRead: boolean,
  type: TypeStatus // Type of notification
  priority: PriorityStatus, // Priority level
  actionRequired: boolean, // Indicates if action is required from the user
  date: Date;
}