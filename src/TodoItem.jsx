import React from 'react';
import Todo from './Todo';
import TodoFinishButton from './TodoFinishButton';

function TodoItem({ todo, handleClickFinish }) {
  return (
    <li>
      <Todo todo={todo} />
      <TodoFinishButton onClick={handleClickFinish} />
    </li>
  );
}

export default TodoItem;
