import React from 'react';

import Button from './Button';

const Todo = ({ data, handleRemove }) => (
  <li key={data.id}>
    {data.title}
    <Button type="button" onClick={handleRemove}>
      완료
    </Button>
  </li>
);

export default Todo;
