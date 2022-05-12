/* eslint-disable react/no-array-index-key */
import React from 'react';

function TodoList({ todos, removeTodo }) {
  if (todos.length === 0) {
    return (<div>할 일이 없어요!</div>);
  }

  return (
    todos.map((todo, index) => (
      <div key={index}>
        {index}
        .
        {' '}
        {todo}
        <button type="button" onClick={() => removeTodo(todo)}>완료</button>
      </div>
    ))
  );
}

export default TodoList;
