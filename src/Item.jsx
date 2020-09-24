import React from 'react';

import Button from './Button';

function Item({ todo, onClick }) {
  return (
    <li>
      <span>{todo.content}</span>
      <Button onClick={() => onClick(todo.id)}>
        완료
      </Button>
    </li>
  );
}

export default Item;
