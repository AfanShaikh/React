import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [counter , setCounter] = useState(0);

  // Without
  // With
  // Empty

  useEffect(() =>{
    console.log('This is without [] <--- Dependency 🔁');
  });

  useEffect(() =>{
    console.log('This is with [] <--- Dependency ✅');
  },[counter]);

  useEffect(() =>{
    console.log('This is empty [] <--- Dependency 1️⃣');
  },[])

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prev) => prev +1)}>Add</button>
      <button onClick={() => setCounter((prev) => prev - 1)}>Remove</button>
    </div>
  );
}

export default App;
