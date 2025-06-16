import express from 'express';
import { authenticationToken } from '../../middleware/auth/auth.middleware';
import { setSleepingDuration } from '../../service/impl/sleep/setSleepingDuration/setSleepingDurtion.impl';
import { validate } from '../../middleware/globalValidator/globalValidator.md';
import { validateSleepDuration } from '../../utils/validators.md';
const router = express.Router();
router.post('/set-sleeping-duration', authenticationToken, validate(validateSleepDuration), setSleepingDuration);
export default router;