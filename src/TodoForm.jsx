import React from 'react';

import Input from './Input';

function TodoForm({ value, onInputSubmit, onInputChange }) {
  return (
    <form onSubmit={onInputSubmit}>
      <Input placeholder="할 일을 입력해 주세요" value={value} onChange={onInputChange} />
      <button type="submit" disabled={!value.trim()}>추가</button>
    </form>
  );
}

export default TodoForm;
