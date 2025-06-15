import express from 'express';
import { register } from '../../service/impl/auth/register/register.impl';
import { authenticationToken } from '../../middleware/auth/auth.middleware';
import { validate } from '../../middleware/globalValidator/globalValidator.md';
import { validateUserRegistration } from '../../utils/validators.md';
const router = express.Router();
router.post('/register', authenticationToken, validate(validateUserRegistration), register);
export default router;