import mongoose, { Schema } from "mongoose";
import {
    ISettingInterfac,
    ProfileVisibilityStatus,
    ActivityVisibilityStatus,
    SearchVisibilityStatus,
    UnitsDistanceStatus,
    UnitsTemperatureStatus,
    UnitsWeightStatus,
    ThemeStatus,
    LanguageStatus
} from "../../service/interfac/setting/setting.interfac";
const settingSchema: Schema = new Schema<ISettingInterfac>({
    userId: {
        type: Schema.ObjectId,
        ref: 'Auth',
        required: true,
    },
    privacy: {
        profileVisibility: {
            type: String,
            trim: true,
            enum: Object.values(ProfileVisibilityStatus),
            default: ProfileVisibilityStatus.PRIVATE,
        },
        activityVisibility: {
            type: String,
            trim: true,
            enum: Object.values(ActivityVisibilityStatus),
            default: ActivityVisibilityStatus.PRIVATE,
        },
        searchVisibility: {
            type: String,
            trim: true,
            enum: Object.values(SearchVisibilityStatus),
            default: SearchVisibilityStatus.HIDDEN,
        },
    },
    notifications: {
        email: {
            type: Boolean,
            default: false,
        },
        push: {
            type: Boolean,
            default: false,
        },
        sms: {
            type: Boolean,
            default: false,
        },
    },
    units: {
        distance: {
            type: String,
            trim: true,
            enum: Object.values(UnitsDistanceStatus),
            default: UnitsDistanceStatus.METRICS,
        },
        weight: {
            type: String,
            trim: true,
            enum: Object.values(UnitsWeightStatus),
            default: UnitsWeightStatus.KILOGRAMS,
        },
        temperature: {
            type: String,
            trim: true,
            enum: Object.values(UnitsTemperatureStatus),
            default: UnitsTemperatureStatus.FAHRENHEIT,
        },
    },
    language: {
        type: String,
        trim: true,
        enum: Object.values(LanguageStatus),
        default: LanguageStatus.ENGLISH,
    },
    theme: {
        type: String,
        trim: true,
        enum: Object.values(ThemeStatus),
        default: ThemeStatus.LIGHT,
    },
    date: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });
const Setting = mongoose.model<ISettingInterfac>('Setting', settingSchema);
export default Setting;