import express from 'express'
import { login, logout, register } from '../Controllers/userController.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);

export default router;