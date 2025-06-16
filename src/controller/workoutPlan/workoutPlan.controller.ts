import express from 'express';
import { authenticationToken } from '../../middleware/auth/auth.middleware';
import { createWorkoutPlan } from '../../service/impl/workoutPlan/setWorkoutPlan/setWorkoutPlan.impl';
import { validate } from '../../middleware/globalValidator/globalValidator.md';
import { validateWorkoutPlan } from '../../utils/validators.md';
const router = express.Router();
router.post('/create-work-out-plan', authenticationToken, validate(validateWorkoutPlan), createWorkoutPlan);
export default router;