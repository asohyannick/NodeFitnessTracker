import express from 'express';
import { authenticationToken } from '../../middleware/auth/auth.middleware';
import { sendReminder } from '../../service/impl/reminder/sendReminder/sendReminder.impl';
import { validate } from '../../middleware/globalValidator/globalValidator.md';
import { validateSendReminderMessage } from '../../utils/validators.md';
const router = express.Router();
router.post('/send-reminder', authenticationToken, validate(validateSendReminderMessage), sendReminder);
export default router;