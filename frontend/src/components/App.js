import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [userName, setName] = useState("");
  const [habitTitle, setHabit] = useState("");
  const handleOnSubmit = async (e) => {
      e.preventDefault();
      let result = await fetch(
      'http://localhost:8000/register', {
          method: "post",
          body: JSON.stringify({ name, email }),
          headers: {
              'Content-Type': 'application/json'
          }
      })
      result = await result.json();
      console.warn(result);
      if (result) {
          alert("Data saved succesfully");
          setEmail("");
          setName("");
      }
  }
  return (
      <>
          <h1>This is React WebApp </h1>
          <form action="">
              <input type="text" placeholder="name"
              value={userName} onChange={(e) => setName(e.target.value)} />
              <input type="email" placeholder="email"
              value={habitTitle} onChange={(e) => setHabit(e.target.value)} />
              <button type="submit"
              onClick={handleOnSubmit}>submit</button>
          </form>

      </>
  );
}

export default App;
