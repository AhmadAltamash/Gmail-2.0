import express from 'express'
import { createEmail, deleteEmail, getEmail } from '../Controllers/emailController.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.post('/createEmail', auth, createEmail);
router.delete('/email/:id', auth, deleteEmail);
router.get('/getAllEmails', auth, getEmail);

export default router;