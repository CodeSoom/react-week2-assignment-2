import React from 'react';
import NoneTodos from './NoneTodos';
import ShowTodos from './ShowTodos';

const isEmpty = (arr = []) => arr.length === 0;

export default function TodoLists({ todos, onClickComplete }) {
  if (isEmpty(todos)) {
    return <NoneTodos />;
  }
  return <ShowTodos todos={todos} onClickComplete={onClickComplete} />;
}
