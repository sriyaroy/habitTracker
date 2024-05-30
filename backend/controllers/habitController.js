// controllers/habitController.js
import Habit from '../model/habitSchema.js';
import mongoose from 'mongoose';

// get all habits
const getAllHabits = async (req, res) => {
    const habits = await Habit.find({}).sort({createdAt: -1});
    res.status(200).json(habits);
};

// get a single habit
const getHabit = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such workout' });
    };

    const habit = await Habit.findById(id);

    if (!habit) {
        return res.status(404).json({ error: 'No such workout' });
    };

    res.status(200).json(habit);
};

// create new habit
const createHabit = async (req, res) => {
    const { habitName, frequency, targetPerYear, achievedPerYear, datesAchieved } = req.body;

    // add doc to dB
    try {
        const habit = await Habit.create({ habitName, frequency, targetPerYear, achievedPerYear, datesAchieved });
        res.status(200).json(habit);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// delete a habit
const deleteHabit = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such workout' });
    };

    const habit = await Habit.findOneAndDelete({ _id: id });

    if (!habit) {
        return res.status(404).json({ error: error.message });
    }

    res.status(200).json(habit);
};

// update a habit
const updateHabit = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such workout' });
    };

    const habit = await Habit.findOneAndUpdate({ _id: id }, { ...req.body });

    if (!habit) {
        return res.status(404).json({ error: error.message });
    }

    res.status(200).json(habit);
};

export {
    createHabit,
    getAllHabits,
    getHabit,
    deleteHabit,
    updateHabit
};
