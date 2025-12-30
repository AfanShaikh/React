import React from 'react';

import { myStore } from '../Store/Store';
import * as types from '../Reducer/Action';

export const Counter = () => {
    // const [ count, setCount ] = React.useState(0);
    const [jugad, setJugad] = React.useState(0);

    const { getState, dispatch, subscribe } = myStore;

    subscribe(() => {
      setJugad((prev)=> prev +1);
    });



  return (
    <>
        <h1>Counter{getState().count}</h1>
        <button onClick={()=> dispatch({type: types.INCREMENT})}>+</button>
        <button onClick={()=> dispatch({type: types.DECREMENT})}>-</button>
    </>
  );
};