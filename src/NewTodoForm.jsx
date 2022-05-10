import React from 'react';

const NewTodoForm = ({
  currentTodoAction,
  handleCurrentTodoActionChange,
  handleCurrentTodoActionSubmit,
}) => (
  <>
    <input placeholder="할 일을 입력해 주세요" onChange={handleCurrentTodoActionChange} value={currentTodoAction} />
    <button type="button" onClick={handleCurrentTodoActionSubmit}>추가</button>
  </>
);

export default NewTodoForm;
