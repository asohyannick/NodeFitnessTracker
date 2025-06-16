import  express from 'express';
import { authenticationToken } from '../../middleware/auth/auth.middleware';
import { createChallenge } from '../../service/impl/challenge/createChallenge/createChallenge.impl';
import { validate } from '../../middleware/globalValidator/globalValidator.md';
import { validateCreatedChallenge } from '../../utils/validators.md';
const router = express.Router();
router.post('/create-challenge', authenticationToken, validate(validateCreatedChallenge), createChallenge);
export default router;