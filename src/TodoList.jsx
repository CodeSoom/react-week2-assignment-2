import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todoList, onRemove }) {
  return (
    <div>
      {(todoList.map(({ id, todo }) => (
        <TodoItem key={id} id={id} item={todo} onRemove={onRemove} />
      )))}
    </div>
  );
}

export default TodoList;
