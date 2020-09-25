import React from 'react';

import Button from './Button';

function TodoItem({ item, onDoneButtonClick }) {
  return (
    <li>
      {item.todo}
      <Button onClick={() => onDoneButtonClick(item.id)}>
        완료
      </Button>
    </li>
  );
}
export default TodoItem;
