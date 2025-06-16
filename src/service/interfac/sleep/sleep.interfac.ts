import { Document, Types } from "mongoose";
export enum SleepQualityStatus {
    POOR = 'POOR',
    FAIR = 'FAIR',
    GOOD = 'GOOD',
    EXCELLENT = 'EXCELLENT',
}
export enum SleepProblemStatus {
    NONE = 'NONE',
    INSOMNIA = 'INSOMNIA',
    SLEEP_APNEA = 'SLEEP_APNEA',
    OTHER = 'OTHER',
}
export interface ISleepInterfac extends Document {
    userId: Types.ObjectId;
    duration: number;
    quality: SleepQualityStatus;
    date: Date;
    notes: { type: String },
    sleepStart: Date 
    sleepEnd:Date;//  Time the user woke up
    interruptions: number; //  Number of times the user woke up during the night
    sleepDisorders: SleepProblemStatus; // Optional: Any known sleep disorders
}