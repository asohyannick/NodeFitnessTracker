import mongoose, { Schema } from "mongoose";
import { INutritionInterfac, MealStatus } from "../../service/interfac/nutrition/nutrition.interfac";
const nutritionSchema: Schema = new Schema<INutritionInterfac>({
    userId: {
        type: Schema.ObjectId,
        ref: 'Auth',
        required: true,
    },
    foodItem: {
        type: String,
        trim: true,
    },
    calories: {
        type: String,
        trim: true,
    },
    protein: {
        type: Number,
    },
    carbs: {
        type: Number,
    },
    fats: {
        type: Number,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    notes: {
        type: String,
        trim: true,
    },
    servingSize: {
        type: String,
        trim: true,
    },
    mealType: {
        type: String,
        trim: true,
        enum: Object.values(MealStatus),
        default: MealStatus.BREAKFAST,
    },
    fiber: {
        type: Number,
    },
    sugar: {
        type: Number,
    },
    sodium: {
        type: Number,
    },
}, { timestamps: true });
const Nutrition = mongoose.model<INutritionInterfac>('Nutrition', nutritionSchema);
export default Nutrition;
