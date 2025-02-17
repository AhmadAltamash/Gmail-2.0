import express from 'express'
import { login, logout, register, Login } from '../Controllers/userController.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/login', Login);
router.get('/logout', logout);

export default router;