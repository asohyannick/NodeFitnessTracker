import express from 'express';
import { authenticationToken } from '../../middleware/auth/auth.middleware';
import { createActivity } from '../../service/impl/activity/createActivity/createActivity.impl';
import { validate } from '../../middleware/globalValidator/globalValidator.md';
import { validateActivityCreation } from '../../utils/validators.md';
const router = express.Router();
router.post('/create-activity', authenticationToken, validate(validateActivityCreation), createActivity);
export default router;