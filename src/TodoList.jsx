import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todoList, onRemove }) {
  return (
    <div>
      {todoList === [] ? (
        <p>할 일이 없어요!</p>
      ) : (todoList.map(({ id, todo }) => (
        <TodoItem key={id} id={id} item={todo} onRemove={onRemove} />
      )))}
    </div>
  );
}

export default TodoList;
