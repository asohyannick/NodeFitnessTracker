import Setting from "../../../../model/setting/setting.model";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
const deleteSetting = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const setting = await Setting.findByIdAndDelete(id);
        if(!setting) {
            return res.status(StatusCodes.NOT_FOUND).json({message: "Setting doesn't exist!"});
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: " Setting has been deleted from the database successfully!",
            setting
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}
export {
    deleteSetting
}