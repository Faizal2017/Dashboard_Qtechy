import express from 'express';
import { createContent, getContent } from '../controller/componentController.js';
const router = express.Router();

// Define routes
router.post('/components', createContent);
router.get('/components', getContent);

export default router;