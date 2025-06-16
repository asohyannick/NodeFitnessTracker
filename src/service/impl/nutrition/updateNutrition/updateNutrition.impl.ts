import Nutrition from "../../../../model/nutrition/nutrition.model";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { MealStatus } from "../../../interfac/nutrition/nutrition.interfac";
const updateNutrition = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const {
            userId,
            foodItem,
            calories,
            protein,
            carbs,
            fats,
            notes,
            servingSize,
            fiber,
            sugar,
            sodium,
        } = req.body;
        const nutrition = await Nutrition.findByIdAndUpdate(id, {
            userId,
            foodItem,
            calories,
            protein,
            carbs,
            fats,
            date: Date.now(),
            notes,
            servingSize,
            mealType: MealStatus.LUNCH,
            fiber,
            sugar,
            sodium,
        }, { new: true, runValidators: true});
        return res.status(StatusCodes.OK).json({ message: "Nutrition has been updated successfully", nutrition });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}
export {
    updateNutrition
}