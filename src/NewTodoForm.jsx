import React from 'react';

export default function NewTodoForm({
  currentTodo, onCurrentTodoChange, onCurrentTodoSubmit,
}) {
  const handleCurrentTodoChange = (event) => {
    const { value } = event.target;
    onCurrentTodoChange(value);
  };
  const handleCurrentTodoSubmit = () => {
    onCurrentTodoSubmit();
  };

  return (
    <>
      <input placeholder="할 일을 입력해 주세요" onChange={handleCurrentTodoChange} value={currentTodo} />
      <button type="button" onClick={handleCurrentTodoSubmit}>추가</button>
    </>
  );
}
