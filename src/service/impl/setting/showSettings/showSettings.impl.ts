import Setting from "../../../../model/setting/setting.model";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
const showSettings = async (_req: Request, res: Response): Promise<Response> => {
    try {
        const settings = await Setting.find();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: " Settings have been retrieved from the database successfully!",
            settings
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}
export {
    showSettings
}