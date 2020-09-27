import React from 'react';

function TodoTemplate({ children }) {
  return (
    <>
      <div>To-do</div>
      {children}
    </>
  );
}

export default TodoTemplate;
