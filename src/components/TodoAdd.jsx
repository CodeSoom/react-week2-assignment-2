import React from 'react';
import Input from './components/Input';
import Button from './components/Button';

function TodoAdd({ onClick }) {
  return (
    <form>
      <Input
        type="text"
        name="text"
        placeholder="할 일을 입력해 주세요"
      />
      <Button type="submit" onClick={onClick}>
        추가
      </Button>
    </form>
  );
}

export default TodoAdd;
