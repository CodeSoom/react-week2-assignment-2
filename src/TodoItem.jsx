import React from 'react';

export default function TodoItem({ number, todo, handleRemoveTodo }) {
  const liStyle = {
    listStyleType: 'none',
  };

  return (
    <li style={liStyle}>
      {`${number}. ${todo.title} `}
      <button type="button" onClick={handleRemoveTodo}>
        완료
      </button>
    </li>
  );
}
