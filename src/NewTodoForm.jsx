import React from 'react';

export default function NewTodoForm({
  currentTodo, onChangeTodo, onSubmit,
}) {
  const handleChangeTodo = (event) => {
    const { value } = event.target;
    onChangeTodo(value);
  };

  return (
    <>
      <input placeholder="할 일을 입력해 주세요" onChange={handleChangeTodo} value={currentTodo} />
      <button type="button" onClick={onSubmit}>추가</button>
    </>
  );
}
