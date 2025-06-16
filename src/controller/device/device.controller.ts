import express from 'express';
import { authenticationToken } from '../../middleware/auth/auth.middleware';
import { setDeviceInformation } from '../../service/impl/device/setDeviceInfo/setDeviceInfo.impl';
import { validate } from '../../middleware/globalValidator/globalValidator.md';
import { validateCreatedDevice, validateUpdatedDevice } from '../../utils/validators.md';
import { showDevices } from '../../service/impl/device/showDevices/showDevices.impl';
import { showDevice } from '../../service/impl/device/showDevice/showDevice.impl';
import { editAndUpdateDevice } from '../../service/impl/device/editAndUpdateDevice/editAndUpdateDevice.impl';
const router = express.Router();
router.post('/new-device', authenticationToken, validate(validateCreatedDevice), setDeviceInformation);
router.get('/show-devices', authenticationToken, showDevices);
router.get('show-device/:id', authenticationToken, showDevice);
router.put('/update-device/:id', authenticationToken, validate(validateUpdatedDevice), editAndUpdateDevice);

export default router;