import mongoose, { Schema } from "mongoose";
import { ChallengeStatus, IChallengeInterfac } from '../../service/interfac/challenge/challenge.interfac';
const challengeSchema: Schema = new Schema<IChallengeInterfac>({
    participant: {
        type: Schema.ObjectId,
        ref: 'Auth',
        required: true,
    },
    title: {
        type: String,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    startDate: {
        type: Date,
        default: Date.now,
    },
    endDate: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        trim: true,
        enum: Object.values(ChallengeStatus),
        default: ChallengeStatus.ACTIVE,
    },
    goals: {
        type: [String],
        trim: true,
    },
    rewards: {
        type: [String],
        trim: true,
    },
}, { timestamps: true });
const Challenge = mongoose.model<IChallengeInterfac>('Challenge', challengeSchema);
export default Challenge;