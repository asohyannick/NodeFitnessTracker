import express from 'express';
import { authenticationToken } from '../../middleware/auth/auth.middleware';
import { validate } from '../../middleware/globalValidator/globalValidator.md';
import { validateSleepCalendar,  validateUpdatedSleepCalendar } from '../../utils/validators.md';
import { showSleepingCalendars } from '../../service/impl/sleep/showSleepingCalendars/showSleepingCalendars.impl';
import { showSleepingCalendar } from '../../service/impl/sleep/showSleepingCalendar/showSleepingCalendar.impl';
import { setSleepingCalendar } from '../../service/impl/sleep/setSleepingCalendar/setSleepingCalendar.impl';
import { editAndUpdateSleepingCalendar } from '../../service/impl/sleep/updateSleepingCalendar/editAndUpdateSleepingCalendar.impl';
const router = express.Router();
router.post('/set-sleeping-calendar', authenticationToken, validate(validateSleepCalendar), setSleepingCalendar);
router.get('/fetch-sleeping-calendars', authenticationToken, showSleepingCalendars);
router.get('/fetch-sleeping-calendar/:id', authenticationToken, showSleepingCalendar);
router.put('/update-sleep-calendar/:id', authenticationToken, validate(validateUpdatedSleepCalendar), editAndUpdateSleepingCalendar)
export default router;