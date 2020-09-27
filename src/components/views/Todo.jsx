import React from 'react';

import Button from './Button';

const Todo = ({ todo, onClick }) => (
  <li key={todo.id}>
    {todo.title}
    <Button type="button" onClick={onClick}>
      완료
    </Button>
  </li>
);

export default Todo;
