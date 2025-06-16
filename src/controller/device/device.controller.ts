import express from 'express';
import { authenticationToken } from '../../middleware/auth/auth.middleware';
import { setDeviceInformation } from '../../service/impl/device/setDeviceInfo/setDeviceInfo.impl';
import { validate } from '../../middleware/globalValidator/globalValidator.md';
import { validateCreatedDevice } from '../../utils/validators.md';
const router = express.Router();
router.post('/new-device', authenticationToken, validate(validateCreatedDevice), setDeviceInformation);
export default router;