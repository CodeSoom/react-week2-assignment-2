import React from 'react';

import Input from './Input';
import Todos from './Todos';


function Page({ description, todos, handleAdd, handleChange, handleDelete }) {
  return (
    <div>
      <h1>To-do</h1>
      <Input
        description={description}
        handleAdd={handleAdd}
        handleChange={handleChange} />
      {
        todos.length === 0
        ? <p>할 일이 없어요!</p>
        : <Todos
        todos={todos}
        handleDelete={handleDelete} />
      }
    </div>
  );
}

export default Page;
