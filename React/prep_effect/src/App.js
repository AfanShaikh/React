/* eslint-disable react-hooks/exhaustive-deps */
// import { useEffect, useState } from 'react';
// import './App.css';

// function App() {
//   const [counter , setCounter] = useState(0);

//   // Without
//   // With
//   // Empty

//   useEffect(() =>{
//     console.log('This is without [] <--- Dependency 🔁');
//   });

//   useEffect(() =>{
//     console.log('This is with [] <--- Dependency ✅');
//   },[counter]);

//   useEffect(() =>{
//     console.log('This is empty [] <--- Dependency 1️⃣');
//   },[])

//   return (
//     <div className="App">
//       <h1>{counter}</h1>
//       <button onClick={() => setCounter((prev) => prev +1)}>Add</button>
//       <button onClick={() => setCounter((prev) => prev - 1)}>Remove</button>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { Api_calling  } from "./components/Api_calling";

export const App = () =>{
  const [count , setCount] = React.useState(0);
  const [count2 , setCount2] = React.useState(10);

  React.useEffect(() =>{
    console.log("-> count: always run", count);
  });

  React.useEffect(() =>{
    console.log("-> count: have empty dependency", count);
  },[]);

  React.useEffect(() =>{
    console.log("-> count: have some dependency", count);
  },[count2]);

  return(
    <>
    <h1> Count-{count}</h1>
    <h1> Count-{count2}</h1>

    <button onClick={() => setCount((prev) => prev - 1)}>Remove</button>
    <button onClick={() => setCount((prev) => prev + 1)}>Add</button>
    <button onClick={() => setCount2((prev) => prev - 1)}>Remove1</button>
    <button onClick={() => setCount2((prev) => prev + 1)}>Add2</button>
    <Api_calling/>
    </>
  );
};