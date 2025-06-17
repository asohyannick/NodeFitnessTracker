import express from 'express';
import { authenticationToken } from '../../middleware/auth/auth.middleware';
import { sendSetting } from '../../service/impl/setting/sendSetting/sendSetting.impl';
import { validate } from '../../middleware/globalValidator/globalValidator.md';
import { validateSendSettingSchema } from '../../utils/validators.md';
const router = express.Router();
router.post('/send-setting', authenticationToken, validate(validateSendSettingSchema), sendSetting);
export default router;