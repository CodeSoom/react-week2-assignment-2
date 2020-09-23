import React from 'react';

const TodoInput = ({ todoText, onChangeTodoText, onClickAddTodo }) => (
  <p>
    <input
      type="text"
      id="todo"
      placeholder="할 일을 입력해 주세요"
      onChange={onChangeTodoText}
      value={todoText}
    />
    <button
      type="button"
      onClick={onClickAddTodo}
    >
      추가
    </button>
  </p>
);

export default TodoInput;
