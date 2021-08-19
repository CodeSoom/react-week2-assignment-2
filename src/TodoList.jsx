import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ state, onClick }) {
  return (
    <ol>
      {
        state.todoList.length > 0
          ? state.todoList.map((todo) => (
            <TodoItem todo={todo} onClick={onClick} />
          ))
          : <div>할 일이 없어요!</div>
      }
    </ol>
  );
}
