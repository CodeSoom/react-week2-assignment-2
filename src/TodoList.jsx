import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todoList, onClickRemove }) {
  return (
    <div>
      {(todoList.map(({ id, todo }) => (
        <TodoItem key={id} id={id} item={todo} onClickRemove={onClickRemove} />
      )))}
    </div>
  );
}

export default TodoList;
