import mongoose from "mongoose";

const habitSchema = new mongoose.Schema({
    habitName: {type: String, required: true},
    frequency: {type: String, required: true},
    targetPerYear: {type: Number, required: true},
    achievedPerYear: {type: Number, required: true},
    datesAchieved: {type: Array, default: Date, required: true}
}, {timestamps: true });

const Habit = mongoose.model('Habit', habitSchema);
Habit.createIndexes();
export default Habit;