import express from "express";
import { EmailController } from '../controllers/EmailController.js';
const router=express.Router();
router.post('/ContactUs',EmailController)
  

export default router;