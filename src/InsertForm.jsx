import React from 'react';
import Button from './Button';

export default function InsertForm({ todoItems, onChangeWriteTodo, onClickAddTodo }) {
  const label = '추가';
  return (
    <div>
      <p>
        <input
          type="text"
          value={todoItems.note || ''}
          placeholder="할 일을 입력해 주세요"
          onChange={onChangeWriteTodo}
        />
        <Button
          onClick={() => onClickAddTodo()}
          label={label}
        />
      </p>
    </div>
  );
}
