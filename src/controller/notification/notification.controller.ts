import express from 'express';
import { authenticationToken } from '../../middleware/auth/auth.middleware';
import { sendPushNoficationMessage } from '../../service/impl/notification/sendNotification/sendNotification.impl';
import { showPushNoficationMessages } from '../../service/impl/notification/showNotifications/showNotification.impl';
const router = express.Router();
router.post('/send-notification', authenticationToken, sendPushNoficationMessage);
router.get('/show-notifications', authenticationToken, showPushNoficationMessages);
export default router;