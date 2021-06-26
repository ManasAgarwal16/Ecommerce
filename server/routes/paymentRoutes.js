import express from 'express';
const router = express.Router();
import { paymentDetails } from '../controllers/paymentController.js';
import { protect } from '../middleware/authMiddleware.js';

router.route('/paytm').post(protect, paymentDetails);
export default router;
