import express from 'express';
import { authenticationToken } from '../../middleware/auth/auth.middleware';
import { createProfile } from '../../service/impl/profile/createProfile/createProfile.md';
import { validate } from '../../middleware/globalValidator/globalValidator.md';
import { validateProfileRegistration } from '../../utils/validators.md';
const router = express.Router();
router.post('/create-profile', authenticationToken, validate(validateProfileRegistration), createProfile);
export default router;