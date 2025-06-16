import Nutrition from "../../../../model/nutrition/nutrition.model";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { MealStatus } from "../../../interfac/nutrition/nutrition.interfac";
const setMeal = async (req: Request, res: Response): Promise<Response> => {
    const {
        userId,
        foodItem,
        calories,
        protein,
        carbs,
        fats,
        notes,
        servingSize,  // Optional: Size of the serving (e.g., "1 cup", "100g")
        fiber, // Optional: Fiber content in grams
        sugar, // Optional: Sugar content in grams
        sodium, // Optional: Sodium content in milligrams
    } = req.body;
    try {
        const newNutrition = new Nutrition({
            userId,
            foodItem,
            calories,
            protein,
            carbs,
            fats,
            date: Date.now(),
            notes,
            servingSize,
            mealType: MealStatus.DINNER,
            fiber,
            sugar,
            sodium,
        });
        await newNutrition.save();
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Nutrition has been created successfully",
            newNutrition
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}
export {
    setMeal
}