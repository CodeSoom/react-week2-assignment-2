import React from 'react';

const TodoInput = ({ text, onChangeText, onClickAddTask }) => (
  <p>
    <input
      type="text"
      id="todo"
      placeholder="할 일을 입력해 주세요"
      onChange={(event) => onChangeText({ input: event.target.value })}
      value={text}
    />
    <button
      type="button"
      onClick={onClickAddTask}
    >
      추가
    </button>
  </p>
);

export default TodoInput;
