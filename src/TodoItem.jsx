import React from 'react';

import Button from './Button';

function TodoItem({ item, onDoneButtonClick }) {
  return (
    <li style={{ listStyleType: 'decimal' }}>
      {item.todo}
      <Button onClick={() => onDoneButtonClick(item)}>
        완료
      </Button>
    </li>
  );
}
export default TodoItem;
