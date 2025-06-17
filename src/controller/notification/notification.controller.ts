import express from 'express';
import { authenticationToken } from '../../middleware/auth/auth.middleware';
import { sendPushNoficationMessage } from '../../service/impl/notification/sendNotification/sendNotification.impl';
const router = express.Router();
router.post('/send-notification', authenticationToken, sendPushNoficationMessage);
export default router;