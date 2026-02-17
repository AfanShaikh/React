import './App.css'
import { useState } from 'react';
import { InputBox } from './Components/InputBox'


function App() {
const [value,setValue] = useState("");

  const style = {
    padding:"10px",
    margin:"5px",
    width:"15px",
    textAlign:"center"
  }
  return (
    <>
   <InputBox setMainVal={(v) => setValue(v)} perBox={1} length={4} style={style} />
   <h1>{value}</h1>
      
    </>
  )
}

export { App }
