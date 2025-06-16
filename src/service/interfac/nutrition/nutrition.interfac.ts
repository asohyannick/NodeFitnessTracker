import { Document, Types } from "mongoose";
export enum MealStatus {
    BREAKFAST = 'BREAKFAST',
    LUNCH = 'LUNCH',
    DINNER = 'DINNER',
    SNACK = 'SNACK',
}
export interface INutritionInterfac extends Document {
  userId: Types.ObjectId;
  foodItem: string;
  calories: string;
  protein: number;
  carbs: number;
  fats: number;
  date: Date;
  notes: string;
  servingSize: string // Optional: Size of the serving (e.g., "1 cup", "100g")
  mealType:MealStatus  // Type of meal
  fiber: number, // Optional: Fiber content in grams
  sugar: number, // Optional: Sugar content in grams
  sodium: number, // Optional: Sodium content in milligrams
}