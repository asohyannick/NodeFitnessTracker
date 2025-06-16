import { Document, Types } from "mongoose";
export enum ChallengeStatus {
    ACTIVE = 'ACTIVE',
    COMPLETED = 'COMPLETED',
    CANCELLED = 'CANCELLED',
}
export interface IChallengeInterfac extends Document {
    participant: Types.ObjectId;
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    status: ChallengeStatus, // Current status of the challenge
    goals: [{ // Optional: Goals associated with the challenge
        goalType: string, // Type of goal (e.g., weight loss, distance run)
        target: number, // Target value for the goal
        currentProgress: number // Current progress towards the goal
    }],
    rewards: string[], // Optional: Description of rewards for participants
}
