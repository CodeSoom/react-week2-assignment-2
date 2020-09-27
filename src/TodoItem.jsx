import React from 'react';

import Button from './Button';

function TodoItem({ item: { todo, id }, onClickDeleteTodo }) {
  return (
    <li>
      {todo}
      <Button onClick={() => onClickDeleteTodo(id)}>
        완료
      </Button>
    </li>
  );
}
export default TodoItem;
