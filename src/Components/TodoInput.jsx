import React from 'react';

function TodoInput({ todoInput, onSubmitAddTodo, onChangeTodoInput }) {
  return (
    <form onSubmit={onSubmitAddTodo}>
      <input type="text" placeholder="할 일을 입력해 주세요." value={todoInput} onChange={onChangeTodoInput} />
      <input type="submit" value="추가" />
    </form>
  );
}

export default TodoInput;
