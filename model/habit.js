import mongoose from "mongoose";

const {Schema, model } = mongoose;

const habitSchema = new Schema({
    title: String,
    log: [{ date: Date, completed: Boolean}],
    frequency: {type: String, enum: ['daily', 'weekly', 'monthly'], required: true},
    dataCreated: Date
});

const Habit = model('Habit', habitSchema);
export default Habit;