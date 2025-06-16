import { Document, Types } from 'mongoose';
export  enum InstensityStatus  {
    LOW = 'LOW',
    MODERATE = 'MODERATE',
    HIGH = 'HIGH'
}

export enum MoodStatus {
    HAPPY = 'HAPPY',
    NEUTRAL = 'NEUTRAL',
    SAD = 'SAD'
}

export interface IActivityInterfac extends Document {
    userId: Types.ObjectId;
    type: string;
    duration: number; 
    caloriesBurned: number;
    notes: string;
    location: string;
    intensity: InstensityStatus;
    heartRate: number;
    distance: number;
    equipments: string[];
    mood: MoodStatus;
    date:Date;
}