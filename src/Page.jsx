import React from 'react';
import Button from './Button';
import Buttons from './Buttons';

const Page = ({
  todos,
  value,
  onChangeValue,
  addTodoList,
  deleteTodoList,
}) => (
  <div>
    <h2>Todo</h2>
    <input type="text" onChange={onChangeValue} value={value} />
    <Button addTodoList={addTodoList}>추가</Button>
    <Buttons todos={todos} deleteTodoList={deleteTodoList} />
  </div>
);

export default Page;
