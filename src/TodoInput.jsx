import React from 'react';

const TodoInput = ({ todoText, updateTodoText, addTodo }) => (
  <p>
    <input
      type="text"
      id="todo"
      placeholder="할 일을 입력해 주세요"
      onChange={(event) => {
        updateTodoText({ text: event.target.value });
      }}
      value={todoText}
    />
    <button
      type="button"
      onClick={() => addTodo({ text: todoText })}
    >
      추가
    </button>
  </p>
);

export default TodoInput;
