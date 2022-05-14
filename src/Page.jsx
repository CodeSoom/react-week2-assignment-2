import React from 'react';

import WriteInput from './WriteInput';
import TodoItems from './TodoItems';

export default function Page({
  items,
  onSubmit,
  handleComplete,
  itemTitle,
  onChangeTitle,
}) {
  return (
    <div>
      <h1>To-Do List</h1>
      <WriteInput
        onSubmit={onSubmit}
        value={itemTitle}
        onChange={onChangeTitle}
      />
      <br />
      <TodoItems items={items} handleComplete={handleComplete} />
    </div>
  );
}
