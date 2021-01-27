import express from 'express';
import { register } from '../../Controllers/app/user/auth.js';

const router = express.Router();

router.post('/register' , register);

export default router;