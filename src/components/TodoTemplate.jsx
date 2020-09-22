import React from 'react';

function TodoTemplate({ children }) {
  return (
    <div>
      <div>To-do</div>
      <div>{children}</div>
    </div>
  );
}

export default TodoTemplate;
