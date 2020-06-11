import React from 'react';

import TodoList from './TodoList';
import Form from './Form';

export default function Page({
  items,
  text,
  handleChange,
  handleClick,
  deleteItem,
}) {
  return (
    <div>
      <h1>To-do</h1>
      <Form
        value={text}
        onChange={handleChange}
        onClick={handleClick}
      />
      <TodoList
        items={items}
        onClick={deleteItem}
      />
    </div>
  );
}
