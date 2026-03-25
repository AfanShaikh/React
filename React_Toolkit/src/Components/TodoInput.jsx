import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Redux/TodoSlicer';

export const TodoInput = () => {
  const dispatch = useDispatch();
  const [text, setText] = React.useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(text));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setText(e.target.value)} />
        <button type="submit">submit</button>
      </form>
    </>
  );
};