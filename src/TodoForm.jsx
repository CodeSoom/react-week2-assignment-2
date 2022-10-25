import React from 'react';

function TodoForm({
  onSubmit,
  onChange,
  todoInput,
  inputRef,
}) {
  return (
    <form onSubmit={onSubmit}>
      <input
        name="todoInput"
        ref={inputRef}
        value={todoInput}
        placeholder="할 일을 입력해 주세요"
        onChange={onChange}
      />
      <button type="submit">
        추가
      </button>
    </form>
  );
}

export default TodoForm;
