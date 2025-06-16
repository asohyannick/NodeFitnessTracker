import express from 'express';
import { authenticationToken } from '../../middleware/auth/auth.middleware';
import { setMeal } from '../../service/impl/nutrition/setNutrition/setNutrition.impl';
import { validate } from '../../middleware/globalValidator/globalValidator.md';
import { validateNutritionCreation } from '../../utils/validators.md';
const router = express.Router();
router.post('/set-meal', authenticationToken, validate(validateNutritionCreation), setMeal);
export default router;