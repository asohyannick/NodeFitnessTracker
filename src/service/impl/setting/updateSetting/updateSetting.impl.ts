import Setting from "../../../../model/setting/setting.model";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { LanguageStatus, ThemeStatus } from "../../../interfac/setting/setting.interfac";
const editAndUpdateSetting = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const { privacy,
            notifications,
            units, } = req.body;
        const setting = await Setting.findByIdAndUpdate(id, {
            privacy,
            notifications,
            units,
            language: LanguageStatus.ENGLISH,
            theme: ThemeStatus.LIGHT,
            date: Date.now(),
        }, { new: true, runValidators: true });
        if (!setting) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Setting doesn't exist!" });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: " Setting has been updated from the database successfully!",
            setting
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}
export {
    editAndUpdateSetting
}