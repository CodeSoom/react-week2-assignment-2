import React from 'react';
import _ from 'lodash';

export default function TodoList({ todos, removeTodo }) {
  if (_.isEmpty(todos)) {
    return (<div>할 일이 없어요!</div>);
  }

  return (
    <ol>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.value}
          <button type="button" onClick={() => removeTodo(todo)}>완료</button>
        </li>
      ))}
    </ol>
  );
}
