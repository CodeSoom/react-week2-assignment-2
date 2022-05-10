import React from 'react';

const TodoAction = ({ item, index, handleTodoActionToDone }) => (
  <div key={item}>
    {item}
    <button type="button" onClick={handleTodoActionToDone} item={index}>완료</button>
  </div>
);

export default TodoAction;
