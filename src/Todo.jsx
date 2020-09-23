import React from 'react';

function Todo({ content, onClickDone }) {
  return (
    <li key={content}>
      {content}
      <button type="button" onClick={() => onClickDone(content)}>완료</button>
    </li>
  );
}

export default Todo;
