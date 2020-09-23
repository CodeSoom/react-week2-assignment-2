import React from 'react';

import Todo from './Todo';
import Button from './Button';

function TodoBox({ todo, onClick }) {
  return (
    <li>
      <Todo todo={todo} />
      <Button onClick={onClick}>
        완료
      </Button>
    </li>
  );
}

export default TodoBox;
