import React from 'react';
import Button from './Button';

function TodoItem({ item, deleteTodoItem }) {
  return (
    <li style={{ listStyleType: 'decimal' }}>
      {item}
      <Button onClick={() => deleteTodoItem(item)}>
        완료
      </Button>
    </li>
  );
}
export default TodoItem;
