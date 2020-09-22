import React from 'react';
import Button from './Button';

function TodoItem({ item }) {
  return (
    <li style={{ listStyleType: 'decimal' }}>
      {item}
      <Button type="button">완료</Button>
    </li>
  );
}
export default TodoItem;
