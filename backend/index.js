import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import habitRoutes from './routes/habits.js';


dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Connected to MongoDB');
  }).catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

// Middleware
app.use(express.json());

// root URL
app.get('/', async (req, res) => {
    res.send('Welcome to your habit tracker!!')
});

// Use routes
app.use('/api', habitRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
