import express from 'express';
import { authenticationToken } from '../../middleware/auth/auth.middleware';
import { setDeviceInformation } from '../../service/impl/device/setDeviceInfo/setDeviceInfo.impl';
import { validate } from '../../middleware/globalValidator/globalValidator.md';
import { validateCreatedDevice } from '../../utils/validators.md';
import { showDevices } from '../../service/impl/device/showDevices/showDevices.impl';
const router = express.Router();
router.post('/new-device', authenticationToken, validate(validateCreatedDevice), setDeviceInformation);
router.get('/show-devices', authenticationToken, showDevices);

export default router;