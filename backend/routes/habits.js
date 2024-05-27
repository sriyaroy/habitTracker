// habits.js
import express from 'express';
import Habit from '../../model/habit.js';
const router = express.Router();



// Need to make api endpoints for CRUD (Create, Read, Update, Delete)
// create a new habit
router.post(`/`, async (req, res) =>{
    const habit = new Habit(req.body);
    await habit.save();
    res.status(201).send(habit);

    habit.save()
        .then(() => res.json('Habit Added!'))
        .catch(error => res.status(400).json('Error: ' + error));
});

// Get all habits
router.get('/', async(req, res) => {
    try {
        const habits = await Habit.find();
        res.status(200).send(habits);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update a habit
router.put('/habits/:id', async(req, res) => {
    try {
        const habit = await Habit.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
        if (!habit) {
            return res.status(404).send();
        }
        res.send(habit);
    } catch (error) {
        res.status(400).send(error)
    }
})

// Delete a habit
router.put('/habits/:id', async(req, res) => {
    try {
        const habit = await Habit.findByIdAndDelete(req.params.id);
        if (!habit) {
            return res.status(404).send();
        }
        res.send(habit);
    } catch (error) {
        res.status(500).send(error)
    }
});

export default router;