import React from 'react';

function Todo({ content, onClick }) {
  return (
    <li key={content}>
      {content}
      <button type="button" onClick={() => onClick(content)}>완료</button>
    </li>
  );
}

export default Todo;
