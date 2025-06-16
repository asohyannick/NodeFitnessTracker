import { IActivityInterfac, InstensityStatus, MoodStatus } from '../../service/interfac/activity/activity.interfac';
import mongoose, {Schema } from 'mongoose';
const activitySchema: Schema = new Schema<IActivityInterfac>({
type:{
    type: String,
    trim: true,
},
duration:{
    type: Number,
},
caloriesBurned:{
    type: Number,
},
notes:{
    type: String,
    trim: true,
},
location:{
    type: String,
    trim: true,
},
intensity:{
    type: String,
    trim: true,
    enum: Object.values(InstensityStatus),
    default: InstensityStatus.MODERATE,
},
heartRate:{
    type: Number,
},
distance:{
    type: Number,
},
equipments:{
    type: [String],
    trim: true,
},
mood:{
    type: String,
    trim: true,
    enum: Object.values(MoodStatus),
    default: MoodStatus.NEUTRAL,
},
date:{
    type: Date,
    default: Date.now
},
}, {timestamps: true});
const Activity = mongoose.model<IActivityInterfac>('model', activitySchema);
export default Activity;