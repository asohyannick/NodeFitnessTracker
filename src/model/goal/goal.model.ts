import mongoose, { Schema } from "mongoose";
import { IGoal, GoalStatus, FrequencyStatus } from "../../service/interfac/goal/goal.interfac";
const goalSchema: Schema = new Schema<IGoal>({
userId:{
    type: Schema.ObjectId,
    ref: 'Auth',
    required: true,
},
type:{
    type: String,
    trim: true,
},
target:{
    type: Number,
},
currentProgress:{
    type: Number,
},
deadline:{
    type: Date,
    default: Date.now,
},
status:{
    type: String,
    trim: true,
    enum: Object.values(GoalStatus),
    default: GoalStatus.PENDING,
},
frequency:{
    type: String,
    trim: true,
    enum: Object.values(FrequencyStatus),
    default: FrequencyStatus.DAILY,
},
notes:{
    type: String,
    trim: true,
},
milestones:{
    type: [String],
    trim: true,
},
}, {timestamps: true});
const Goal = mongoose.model<IGoal>('Goal', goalSchema);
export default Goal;