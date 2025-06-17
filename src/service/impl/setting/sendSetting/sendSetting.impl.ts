import Setting from "../../../../model/setting/setting.model";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import {
    ThemeStatus,
    LanguageStatus,
} from "../../../interfac/setting/setting.interfac";

const sendSetting = async (req: Request, res: Response): Promise<Response> => {
    const { privacy, notifications, units, } = req.body;
    try {
        const newSetting = new Setting({
            privacy,
            notifications,
            units,
            language: LanguageStatus.GERMAN,
            theme: ThemeStatus.DARK,
            date: Date.now(),
        });
        await newSetting.save();
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "A new setting has been created successfully!",
            newSetting
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}
export {
    sendSetting
}