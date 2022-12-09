import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;
import { router as viewsRouter } from '../routes/views';

// Serve Static Files
app.use(express.static(`public`));

// SECTION - Middleware
app.use(express.json());

// View Routes
app.use('/', viewsRouter);

// SECTION Server Start
app.listen(PORT, () => console.log(`Application listening on ${PORT}..`));