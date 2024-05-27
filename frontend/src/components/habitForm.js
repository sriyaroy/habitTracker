import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HabitForm() {
  const [habits, setHabits] = useState([]);
  const [name, setName] = useState('');
  const [frequency, setFrequency] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/api/habits')
      .then(response => {
        setHabits(response.data);
      })
      .catch(error => {
        console.error('Error fetching habits:', error);
      });
  }, []);

  const addHabit = (e) => {
    e.preventDefault();
    const newHabit = { name, frequency };

    axios.post('http://localhost:3000/api/habits', newHabit)
      .then(response => {
        setHabits([...habits, response.data]);
        setName('');
        setFrequency('');
      })
      .catch(error => {
        console.error('Error adding habit:', error);
      });
  };

  return (
    <div>
      <h1>Habit Tracker</h1>
      <form onSubmit={addHabit}>
        <input
          type="text"
          placeholder="Habit Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Frequency"
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
          required
        />
        <button type="submit">Add Habit</button>
      </form>
      <ul>
        {habits.map(habit => (
          <li key={habit._id}>{habit.name} - {habit.frequency}</li>
        ))}
      </ul>
    </div>
  );
}

export default HabitForm;
