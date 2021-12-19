import React from 'react';
import Todo from './Todo';

export default function TodoList({ todos, onClick }) {
  return todos.map((todo, i) => (
    <Todo
      key={todo.key}
      index={i + 1}
      text={todo.text}
      onClick={() => onClick(todo.key)}
    />
  ));
}
