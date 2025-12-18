import { useState } from 'react'
import './App.css'
import { CounterEffect } from './Components/CounterEffect'

function App() {
  const [toggle , setToggle] = useState(true);

  return (
    <>
    {toggle && <CounterEffect />}
    <button className='btn-1'
    onClick={() =>{ setToggle((prev) => !prev);
    }}>
      Toggle-Counter
    </button>
    </>
  )
}

export  { App }