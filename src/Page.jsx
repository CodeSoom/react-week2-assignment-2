import React from 'react';

import Input from './Input';
import Todos from './Todos';


function Page({ description, todos, onAdd, onChange, onDelete }) {
  return (
    <div>
      <h1>To-do</h1>
      <Input
        description={description}
        onAdd={onAdd}
        onChange={onChange} />
      {
        todos.length === 0
        ? <p>할 일이 없어요!</p>
        : <Todos
        todos={todos}
        onDelete={onDelete} />
      }
    </div>
  );
}

export default Page;
