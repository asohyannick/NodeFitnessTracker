import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Device from "../../../../model/device/device.model";
import { DeviceStatus } from "../../../interfac/device/device.interfac";
const setDeviceInformation = async (req: Request, res: Response): Promise<Response> => {
    const {
        deviceName,
        deviceType,
        serialNumber,
        model,
        manufacturer,
        batteryLevel,
    } = req.body;
    try {
        const newDevice = new Device({
            deviceName,
            deviceType,
            registeredAt: Date.now(),
            serialNumber,
            model,
            manufacturer,
            lastSync: Date.now(),
            batteryLevel,
            status: DeviceStatus.ACTIVE,
        });
        await newDevice.save();
        return res.status(StatusCodes.CREATED).json({ success: true, message: "A new device has been created successfully", newDevice });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    setDeviceInformation
}