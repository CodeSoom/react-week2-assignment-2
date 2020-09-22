import React from 'react';
import Button from './Button';

function TodoItem() {
  return (
    <li style={{ listStyleType: 'decimal' }}>
      할일
      <Button type="button">완료</Button>
    </li>
  );
}
export default TodoItem;
