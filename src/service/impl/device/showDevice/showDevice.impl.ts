import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Device from "../../../../model/device/device.model";
const showDevice = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const device = Device.findById(id);
        if (!device) {
            return res.status(StatusCodes.NOT_FOUND).json({message: "Device doesn't exist!"});
        }
        return res.status(StatusCodes.OK).json({ success: true, message: "Device has been fetched successfully from the database", device});
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    showDevice
}