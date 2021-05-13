import React from 'react';
import Button from './Button';
import Buttons from './Buttons';
import Input from './Input';
import Title from './Title';

const Page = ({
  todos,
  value,
  onChangeValue,
  addTodoList,
  deleteTodoList,
}) => (
  <div>
    <Title>Todo</Title>
    <Input type="text" onChange={onChangeValue} value={value} />
    <Button addTodoList={addTodoList}>추가</Button>
    <Buttons todos={todos} deleteTodoList={deleteTodoList} />
  </div>
);

export default Page;
