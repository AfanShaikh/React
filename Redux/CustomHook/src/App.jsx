import { useState } from 'react'
import './App.css'
import { useLocalStorage } from './hook/useLocalStorage';
import { useToggle} from './hook/useToggle';

export function App() {
  const [string, setString] = useState('');

  const [value, setValue] = useLocalStorage('name', []);
  console.log('🚀 ~ value:', value);

   const [toggle, setToggle] = useToggle(false);
   console.log('🚀 ~ toggle:', toggle);

   
  return (
    <>
    <input type='text' onChange={(e) => setString(e.target.value)}/>
    <button onClick={() => setValue(string)}>Click</button>
    { toggle && <h1> I'am Inevitable</h1> }
    <button onClick={() => setToggle()}>
      Toggle
    </button>
    {/* <button onClick={() => setToggle(true)}>Toggle-On</button> */}

    </>
  )
};