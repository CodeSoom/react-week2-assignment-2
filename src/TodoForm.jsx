import React from 'react';

import Input from './Input';

function TodoForm({ todoTitle, onTodoTitleSubmit, onTodoTitleChange }) {
  return (
    <form onSubmit={onTodoTitleSubmit}>
      <Input
        placeholder="할 일을 입력해 주세요"
        value={todoTitle}
        onChange={onTodoTitleChange}
      />
      <button type="submit" disabled={!todoTitle.trim()}>추가</button>
    </form>
  );
}

export default TodoForm;
