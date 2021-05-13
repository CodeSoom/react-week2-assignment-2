import React from 'react';
import Button from './Button';

const TodoItem = ({ todo, deleteTodo, checkTodo }) => {
  const onDeleteTodo = (id) => () => deleteTodo(id);
  const onCheckTodo = (id) => () => checkTodo(id);

  return (
    <li className="todo">
      <p
        onClick={onCheckTodo(todo.id)}
        className={todo.done ? 'done' : ''}
        aria-hidden="true"
      >
        {todo?.content}
      </p>
      <Button type="button" onClick={onDeleteTodo(todo.id)}>완료</Button>
    </li>
  );
};

export default TodoItem;
