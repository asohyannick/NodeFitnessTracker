import { Types, Document } from "mongoose";
export enum GoalStatus {
    PENDING = 'PENDING',
    PROGRESS = 'PROGRESS',
    ACTIVE = 'ACTIVE',
    COMPLETED = 'COMPLETED',
}
export enum FrequencyStatus {
    DAILY = 'DAILY',
    WEEKLY = 'WEEKLY',
    MONTHLY = 'MONTHLY'
}
export interface IGoal extends Document {
    userId: Types.ObjectId;
    type: string;
    target: number;
    currentProgress: number;
    deadline: Date;
    status: GoalStatus;
    frequency: FrequencyStatus;
    notes: string;
    milestones: [{ // Array of milestones to track progress
        milestone: { type: String }, // Description of the milestone
        target: { type: Number }, // Target value for the milestone
        achieved: { type: Boolean, default: false }, // Whether the milestone has been achieved
        achievedAt: { type: Date } // Date when the milestone was achieved
    }],
}