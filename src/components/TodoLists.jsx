import React from 'react';
import NoneTodos from './NoneTodos';
import ShowTodos from './ShowTodos';

export default function TodoLists({ hasTodos, todos, onClickComplete }) {
  return (
    <>
      {hasTodos ? (
        <ShowTodos todos={todos} onClickComplete={onClickComplete} />
      ) : (
        <NoneTodos />
      )}
    </>
  );
}
