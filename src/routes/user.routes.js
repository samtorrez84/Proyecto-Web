import express from 'express';
import { deleteUser } from '../controllers/user.controllers.js';

const router = express.Router();

router.delete('/delete-account/:userId', deleteUser);

export default router;

