import React from 'react';

import Button from './Button';

export default function TodoItem({ todo, onClickDeleteTodo, onClickCheckTodo }) {
  const handleClickDeleteTodo = (id) => () => onClickDeleteTodo(id);
  const handleClickCheckTodo = (id) => () => onClickCheckTodo(id);

  return (
    <li className="todo">
      <p
        onClick={handleClickCheckTodo(todo.id)}
        className={todo.done ? 'done' : ''}
        aria-hidden="true"
      >
        {todo?.content}
      </p>
      <Button type="button" onClick={handleClickDeleteTodo(todo.id)}>완료</Button>
    </li>
  );
}
