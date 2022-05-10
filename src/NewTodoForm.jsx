import React from 'react';

const NewTodoForm = ({
  currentTodo,
  handleCurrentTodoChange,
  handleCurrentTodoSubmit,
}) => (
  <>
    <input placeholder="할 일을 입력해 주세요" onChange={handleCurrentTodoChange} value={currentTodo} />
    <button type="button" onClick={handleCurrentTodoSubmit}>추가</button>
  </>
);

export default NewTodoForm;
