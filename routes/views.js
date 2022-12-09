import express from 'express';
const router = express.Router();
import { test, root } from '../controllers/Views';

// Root (Homepage) Routes
router.get('/', root);

// Test Route
router.get('/test', test);

export { router }

