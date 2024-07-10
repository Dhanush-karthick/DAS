const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const userRoutes = require('./routes/user');
const movieRoutes = require('./routes/movie');
const reviewRoutes = require('./routes/review');

require('dotenv').config();

const app = express();

// Connect Database
connectDB();

// Middleware

app.use(express.json());

//cors
app.use(cors({
    origin: [
        "http://localhost:3000"
    ],
    credentials: true
}));

// Routes
app.use('/api/auth', userRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/reviews', reviewRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
