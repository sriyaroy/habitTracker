// habits.js
import express from 'express';
import Habit from '../model/habitSchema.js';
const router = express.Router();



// Need to make api endpoints for CRUD (Create, Read, Update, Delete)
// get all habits
router.get('/', (req, res) => {
    res.json({mssg: 'GET all habits'})
});

// create a new habit
router.post('/', (req, res) => {
    res.json({mss: 'POST create new habit'})
});

// get a single habit
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET single habit'})
});

// delete a single habit
router.delete('/:id', (req, res) => {
    res.json({mss: 'DELETE create new habit'})
});

// update a single habit
router.patch('/:id', (req, res) => {
    res.json({mss: 'PATCH create new habit'})
});

//export the router
export default router;