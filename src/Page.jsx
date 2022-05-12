import React from 'react';
import WriteInput from './WriteInput';
import TodoItems from './TodoItems';

function Page({ items, addItem }) {
  return (
    <div>
      <h1>To-Do List</h1>
      <WriteInput onClick={addItem} />
      <TodoItems items={items} />
    </div>
  );
}

export default Page;
