import Nutrition from "../../../../model/nutrition/nutrition.model";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
const showNutrition = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
      const nutrition = await Nutrition.findById(id);
      if (!nutrition) {
        return res.status(StatusCodes.NOT_FOUND).json({message: "Nutrition has been fetched successfully", nutrition});
      }
      return res.status(StatusCodes.OK).json({message: "Nutrition has been fetched successfully", nutrition});
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}
export {
    showNutrition
}