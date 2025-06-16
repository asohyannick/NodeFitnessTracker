import mongoose, { Schema } from "mongoose";
import { IWorkoutPlanInterfac, WorkoutGoalPlanStatus } from '../../service/interfac/workoutPlan/workoutPlan.interfac';
const workoutPlanSchema: Schema = new Schema<IWorkoutPlanInterfac>({
userId:{
    type:Schema.ObjectId,
    ref: 'Auth',
    required: true,
},
title:{
    type: String,
    trim: true,
},
description:{
    type: String,
    trim: true,
},
goal:{
    type: String,
    trim: true,
    enum: Object.values(WorkoutGoalPlanStatus),
    default: WorkoutGoalPlanStatus.FLEXIBILITY,
},
duration:{
    type: Number,
},
exercises:{
    type: [String],
    trim: true,
},
date:{
    type: Date,
    default: Date.now,
},
}, {timestamps: true});
const WorkoutPlan = mongoose.model<IWorkoutPlanInterfac>('WorkoutPlan', workoutPlanSchema);
export default WorkoutPlan;