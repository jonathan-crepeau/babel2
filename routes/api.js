import express from 'express';
const router = express.Router();
import { test } from '../controllers/Auth';

router.get('/test', test);

export { router }