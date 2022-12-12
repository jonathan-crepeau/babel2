import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;
import { router as viewsRouter } from '../routes/views';
import { router as apiRouter } from '../routes/api';

// Serve Static Files
app.use(express.static(`public`));

// SECTION - Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// View Routes
app.use('/', viewsRouter);

// API Routes
app.use('/api/v1', apiRouter);

// SECTION Server Start
app.listen(PORT, () => console.log(`Application listening on ${PORT}..`));