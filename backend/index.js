import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import habitRoutes from './routes/habits.js';
import habitModel from './model/habitSchema.js'

// express app
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors()); // enabling CORS
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
});

// Use routes
app.use('/api/habits', habitRoutes);

// Connect to MongoDB
const MONGOURL = process.env.MONGODB_URI;
mongoose.connect(MONGOURL).then(() => {
  // listen for requests
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  console.log('Connected to MongoDB');
  }).catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });



