import express from 'express';
import { signup } from '../controllers/authenController.js';

const router = express.Router();
 
router.post("/signup", signup)

export default router;