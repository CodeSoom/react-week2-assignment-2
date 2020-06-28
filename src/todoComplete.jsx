import React from 'react';

export default function TodoComplete({ todos, onClick }) {
  if (todos.length === 0) {
    return '할 일이 없어요!';
  }

  return (
    <div>
      {todos.map((todo, index) => (
        <div key={todo.id}>
          {`${index + 1}. ${todo.text}`}
          <button type="button" onClick={() => onClick(index)}>
            완료
          </button>
        </div>
      ))}
    </div>
  );
}
