import { Types } from "mongoose";
export enum DeviceStatus {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
    DISCONNECTED = 'DISCONNECTED'
}

export interface IDeviceInterfac {
    userId: Types.ObjectId;
    deviceName: string;
    deviceType: string // e.g., smartwatch, fitness band
    registeredAt :Date;
    serialNumber: string, // Unique identifier for the device
    model:string, // Optional: Model of the device
    manufacturer:string, // Optional: Manufacturer of the device
    lastSync: Date, // Optional: Last time the device synced with the application
    batteryLevel:number // Optional: Current battery level (0-100%)
    status: DeviceStatus // Current status of the device
}