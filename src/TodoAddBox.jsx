import React from 'react';
import TodoInput from './TodoInput';
import TodoAddButton from './TodoAddButton';

function TodoAddBox({ todo, handleChangeTodo, handleClickAdd }) {
  return (
    <div>
      <TodoInput todo={todo} onChange={handleChangeTodo} />
      <TodoAddButton onClick={handleClickAdd} />
    </div>
  );
}

export default TodoAddBox;
