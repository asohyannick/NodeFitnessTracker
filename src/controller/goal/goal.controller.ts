import express from 'express';
import { authenticationToken } from '../../middleware/auth/auth.middleware';
import { setGoal } from '../../service/impl/goal/setGoal/setGoal.impl';
import { validate } from '../../middleware/globalValidator/globalValidator.md';
import { validateGoalCreation } from '../../utils/validators.md';
const router = express.Router();
router.post('/set-goal', authenticationToken, validate(validateGoalCreation), setGoal);
export default router;