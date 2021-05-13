import React from 'react';
import Button from './Button';

const TodoList = ({ todo, deleteTodoList, checkTodo }) => {
  const onDeleteTodoList = (id) => () => deleteTodoList(id);
  const onCheckTodo = (id) => () => checkTodo(id);

  return (
    <li
      onClick={onCheckTodo(todo.id)}
      className={todo.done ? 'done' : ''}
      aria-hidden="true"
    >
      <p>{todo?.content}</p>
      <Button type="button" onClick={onDeleteTodoList(todo.id)}>완료</Button>
    </li>
  );
};

export default TodoList;
