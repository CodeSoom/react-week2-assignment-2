import React from 'react';
import Button from './Button';

const TodoList = ({ todo, deleteTodoList }) => {
  const onDeleteTodoList = (id) => () => deleteTodoList(id);

  return (
    <li>
      <p>{todo?.content}</p>
      <Button type="button" onClick={onDeleteTodoList(todo.id)}>완료</Button>
    </li>
  );
};

export default TodoList;
