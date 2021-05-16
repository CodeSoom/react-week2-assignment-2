import React from 'react';

import Button from './common/Button';

export default function TodoInput({ inputtedTodo, onChangeText, onClickAddTodo }) {
  return (
    <div>
      <input
        type="text"
        name="todo"
        value={inputtedTodo}
        placeholder="할 일을 입력해 주세요"
        onChange={(event) => onChangeText(event.target.value)}
      />
      <Button
        title="추가"
        onPress={onClickAddTodo}
      />
    </div>
  );
}
