import { Document, Types } from "mongoose";
export enum WorkoutGoalPlanStatus {
    STRENGTH = 'STRENGTH',
    ENDURANCE = 'ENDURANCE',
    HYPERTROPHY = 'HYPERTROPHY',
    FLEXIBILITY = 'FLEXIBILITY',
};
export interface IWorkoutPlanInterfac extends Document {
    userId: Types.ObjectId;
    title: string;
    description: string, // Optional: Description of the workout plan
    goal: WorkoutGoalPlanStatus, // Goal of the workout plan
    duration: number, // Optional: Total duration of the workout plan in minutes
    exercises: [{
        name: string;
        sets: string;
        reps: number;
        rest: number, // in seconds
        weight: number // Optional: Weight used for the exercise (if applicable)
        notes: string // Optional: Additional notes for the exercise
    }],
    date: Date;
}