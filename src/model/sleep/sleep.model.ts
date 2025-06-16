import mongoose, { Schema } from "mongoose";
import { ISleepInterfac, SleepQualityStatus, SleepProblemStatus } from '../../service/interfac/sleep/sleep.interfac';
const sleepSchema: Schema = new Schema<ISleepInterfac>({
userId:{
    type: Schema.ObjectId,
    ref: 'Auth',
    required: true,
},
duration:{
    type: Number,
},
quality:{
    type: String,
    trim: true,
    enum: Object.values(SleepQualityStatus),
    default: SleepQualityStatus.GOOD,
},
date:{
    type: Date,
    default: Date.now(),
},
notes:{
    type: String,
    trim: true,
},
sleepStart:{
    type: Date,
    default: Date.now,
},
sleepEnd:{
    type: Date,
    default: Date.now,
},
interruptions:{
    type: Number,
},
sleepDisorders:{
    type: String,
    trim: true,
    enum: Object.values(SleepProblemStatus),
    default: SleepProblemStatus.NONE,
},
}, {timestamps: true});
const Sleep = mongoose.model('Sleep', sleepSchema);
export default Sleep;