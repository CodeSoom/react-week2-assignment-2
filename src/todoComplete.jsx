import React from 'react';

export default function TodoComplete({ todos, onClick }) {
  if (todos.length === 0) {
    return '할 일이 없어요!';
  }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.title}
          <button type="button" onClick={() => onClick(todo.id)}>
            완료
          </button>
        </div>
      ))}
    </div>
  );
}
