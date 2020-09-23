import React from 'react';

import Button from './Button';

function TodoItem({ item, removeSelectedTodo }) {
  return (
    <li style={{ listStyleType: 'decimal' }}>
      {item.todo}
      <Button onClick={() => removeSelectedTodo(item)}>
        완료
      </Button>
    </li>
  );
}
export default TodoItem;
