import express from 'express';
import { authenticationToken } from '../../middleware/auth/auth.middleware';
import { createActivity } from '../../service/impl/activity/createActivity/createActivity.impl';
import { validate } from '../../middleware/globalValidator/globalValidator.md';
import { validateActivityCreation, validateUpdatedActivity } from '../../utils/validators.md';
import { showActivities } from '../../service/impl/activity/showActivities/showActivities.impl';
import { showActivity } from '../../service/impl/activity/showActivity/showActivity.impl';
import { editAndUpdateActivity } from '../../service/impl/activity/updateActivity/updateActivity.impl';
import { deleteActivity } from '../../service/impl/activity/deleteActivity/deleteActivity.impl';
const router = express.Router();
router.post('/create-activity', authenticationToken, validate(validateActivityCreation), createActivity);
router.get('/show-activities', authenticationToken, showActivities);
router.get('/show-activity/:id', authenticationToken, showActivity);
router.put('/update-activity/:id', authenticationToken, validate(validateUpdatedActivity), editAndUpdateActivity);
router.delete('/delete-activity/:id', authenticationToken, deleteActivity);
export default router;