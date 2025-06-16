import Nutrition from "../../../../model/nutrition/nutrition.model";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
const deleteNutrition = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const nutrition = await Nutrition.findByIdAndDelete(id);
        if (!nutrition) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Nutrition doesn't exist!", nutrition });
        }
        return res.status(StatusCodes.OK).json({ message: "Nutrition has been deleted successfully", nutrition });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}
export {
    deleteNutrition
}