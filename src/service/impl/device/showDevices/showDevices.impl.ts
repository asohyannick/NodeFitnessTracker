import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Device from "../../../../model/device/device.model";
const showDevices = async (_req: Request, res: Response): Promise<Response> => {
    try {
        const devices = Device.find();
        return res.status(StatusCodes.OK).json({ success: true, message: "Devices have been fetched successfully from the database", devices});
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    showDevices
}