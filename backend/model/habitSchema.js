import mongoose from "mongoose";

const habitSchema = new mongoose.Schema({
    userName: String,
    default: mongoose.Types.ObjectId,
    habits: [
        {
            habitTitle: String,
            default: mongoose.Types.ObjectId,
            frequency: String,
            targetPerYear: Number,
            dateCreated: {type: Date, default: Date.now},
            achievedPerYear: Number,
            datesAchieved: {type: Array, default: Date}
        }
    ]
});

const Habit = mongoose.model('habits', habitSchema);
Habit.createIndexes();
export default Habit;