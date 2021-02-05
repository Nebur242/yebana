import express from 'express';
import { registerFirst , registerSecond , registerThird } from '../../Controllers/app/user/auth.js';

const router = express.Router();

//public
router.post('/register/first' , registerFirst);

//private
router.post('/register/second' , registerSecond);

//private
router.post('/register/third' , registerThird);


export default router;