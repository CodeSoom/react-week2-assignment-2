import React, { useState } from 'react';
import Button from './Button';

const TodoList = ({ todo, deleteTodoList }) => {
  const onDeleteTodoList = (id) => () => deleteTodoList(id);
  const [isTodoDone, setIsTodoDone] = useState(false);

  return (
    <li
      onClick={() => {
        setIsTodoDone(!isTodoDone);
      }}
      className={isTodoDone ? 'done' : ''}
      aria-hidden="true"
    >
      <p>{todo?.content}</p>
      <Button type="button" onClick={onDeleteTodoList(todo.id)}>완료</Button>
    </li>
  );
};

export default TodoList;
