import React from 'react';

import TodoAddButton from './TodoAddButton';

export default function TodoInput({ todo, onChangeText, onClickAddTodo }) {
  return (
    <div>
      <input
        type="text"
        name="todo"
        value={todo}
        placeholder="할 일을 입력해 주세요"
        onChange={(event) => onChangeText(event.target.value)}
      />
      <TodoAddButton onClickAddTodo={onClickAddTodo} />
    </div>
  );
}
