import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Device from "../../../../model/device/device.model";
import { DeviceStatus } from "../../../interfac/device/device.interfac";
const editAndUpdateDevice = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const {
            deviceName,
            deviceType,
            serialNumber,
            model,
            manufacturer,
            batteryLevel,
        } = req.body;
        const device = Device.findByIdAndUpdate(id, {
            deviceName,
            deviceType,
            registeredAt: Date.now(),
            serialNumber,
            model,
            manufacturer,
            lastSync: Date.now(),
            batteryLevel,
            status: DeviceStatus.ACTIVE,
        }, { new: true, runValidators: true });
        if (!device) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Device doesn't exist!" });
        }
        return res.status(StatusCodes.OK).json({ success: true, message: "Device has been updated successfully from the database", device });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    editAndUpdateDevice
}