import Nutrition from "../../../../model/nutrition/nutrition.model";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
const showNutritions = async (_req: Request, res: Response): Promise<Response> => {
    try {
      const nutritions = await Nutrition.find();
      return res.status(StatusCodes.OK).json({message: "Nutritions have been fetched successfully", nutritions});
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}
export {
    showNutritions
}