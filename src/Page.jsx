import React from 'react';

import WriteInput from './WriteInput';
import TodoItems from './TodoItems';

function Page({ todoItems, onSubmit }) {
  return (
    <div>
      <h1>To-Do List</h1>
      <WriteInput onSubmit={onSubmit} />
      <TodoItems todoItems={todoItems} />
    </div>
  );
}

export default Page;
