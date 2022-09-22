import React from 'react';
import Input from './Input';
import Items from './Items';

export default function Page({
  todo,
  items,
  onChangeTodo,
  handleAddButton,
  handleCompleteButton,
}) {
  return (
    <>
      <h1>To-do</h1>
      <p>
        <Input
          todo={todo}
          onChange={onChangeTodo}
          onClick={handleAddButton}
        />
      </p>
      <Items
        items={items}
        onClick={handleCompleteButton}
      />
    </>
  );
}
