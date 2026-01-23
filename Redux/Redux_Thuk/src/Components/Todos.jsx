import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TodosInput } from './TodoInput';
import axios from 'axios';
import * as actFunc from '../Redux/Action';

export const Todos = () => {
     const data = useSelector((state) => state.todos);
  console.log('🚀 ~ data:', data);
  const dispatch = useDispatch();

  const getApi = () =>{
    axios
      .get('http://localhost:8080/todo')
      .then((res) => dispatch(actFunc.getTodosSuccess(res.data)))
      .catch((err) =>console.log(err));
  };

    React.useEffect(() =>{
      getApi();
    },[]);

  return (
    <>
      <h1>To-dos</h1>
      <TodosInput getApi={getApi} />
      {data.map((el) => (
        <p key={el.id}>
          {el.title} - {el.status ? 'true' : 'false'}
        </p>
      ))

      }
    </>
  )
}


