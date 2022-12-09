import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

// SECTION - Middleware
app.use(express.json());

// View Routes
app.get('/', (req, res) => {
    res.json({
        status: 200,
        message: "Root route json response successful.."
    });
});

// SECTION Server Start
app.listen(PORT, () => console.log(`Application listening on ${PORT}..`));