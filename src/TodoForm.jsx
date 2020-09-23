import React from 'react';
import Button from './Button';
import Input from './Input';

function TodoForm({ value, onInputSubmit, onInputChange }) {
  return (
    <form onSubmit={onInputSubmit}>
      <Input placeholder="할 일을 입력해 주세요" value={value} onChange={onInputChange} />
      <Button onClick={onInputSubmit}>
        추가
      </Button>
    </form>
  );
}

export default TodoForm;
