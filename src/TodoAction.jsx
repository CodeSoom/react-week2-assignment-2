import React from 'react';

const TodoAction = ({ todoAction, index, handleTodoActionToDone }) => (
  <div>
    {todoAction}
    <button type="button" onClick={handleTodoActionToDone} value={index}>완료</button>
  </div>
);

export default TodoAction;
