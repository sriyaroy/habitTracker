import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/habits')
    .then( response => response.json())
    .then(data => setHabits(data))
    .catch(error => console.error('Error fetching habits:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='merriweather-regular'>
        🌳 INHABITED 🌳
        </h1>
        <ul>
          {habits.map(habit => (
            <li key={habit._id}>{habit.name}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
