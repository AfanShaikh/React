import React from 'react';
import { TodoInput } from '../Components/TodoInput';
import { TodoList } from '../Components/TodoList.jsx';

export const Todo = () => {
  return (
    <>
      <TodoInput />
      <TodoList />
    </>
  );
};