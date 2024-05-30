// routes/habits.js
import express from 'express';
import {
    createHabit,
    getAllHabits,
    getHabit,
    deleteHabit,
    updateHabit
} from '../controllers/habitController.js';

const router = express.Router();

// get all habits
router.get('/', getAllHabits);

// create a new habit
router.post('/', createHabit);

// get a single habit
router.get('/:id', getHabit);

// delete a single habit
router.delete('/:id', deleteHabit);

// update a single habit
router.patch('/:id', updateHabit);

//export the router
export default router;
