import { useState } from 'react'
import './App.css'
import { useLocalStorage } from './hook/useLocalStorage';

export function App() {
  const [string, setString] = useState('');

  const [value, setValue] = useLocalStorage('name', []);
  return (
    <>
    <input type='text' onChange={(e) => setString(e.target.value)}/>
    <button onClick={() => setValue(string)}>Click</button>
    </>
  )
};