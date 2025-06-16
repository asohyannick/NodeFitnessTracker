import mongoose, { Schema } from "mongoose";
import { DeviceStatus, IDeviceInterfac } from "../../service/interfac/device/device.interfac";
const deviceSchema: Schema = new Schema<IDeviceInterfac>({
    userId: {
        type: Schema.ObjectId,
        ref: 'Auth',
        required: true,
    },
    deviceName: {
        type: String,
        trim: true,
    },
    deviceType: {
        type: String,
        trim: true,
    },
    registeredAt: {
        type: Date,
        default: Date.now,
    },
    serialNumber: {
        type: String,
        trim: true,
    },
    model: {
        type: String,
        trim: true,
    },
    manufacturer: {
        type: String,
        trim: true,
    },
    lastSync: {
        type: Date,
        default: Date.now,
    },
    batteryLevel: {
        type: Number,
    },
    status: {
        type: String,
        trim: true,
        enum: Object.values(DeviceStatus),
        default:DeviceStatus.ACTIVE,
    },
}, { timestamps: true });
const Device = mongoose.model<IDeviceInterfac>('Device', deviceSchema);
export default Device;