import React from 'react';
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
    <button type="button" onClick={addTodoList}>추가</button>
    <Buttons todos={todos} deleteTodoList={deleteTodoList} />
  </div>
);

export default Page;
