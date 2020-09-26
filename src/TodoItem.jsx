import React from 'react';

import Button from './Button';

function TodoItem({ item: { todo, id }, onDoneClick }) {
  return (
    <li>
      {todo}
      <Button onClick={() => onDoneClick(id)}>
        완료
      </Button>
    </li>
  );
}
export default TodoItem;
