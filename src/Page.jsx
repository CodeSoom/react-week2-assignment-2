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
  inputRef,
}) => (
  <div>
    <Title>Todo</Title>
    <Input
      type="text"
      inputRef={inputRef}
      onChange={onChangeValue}
      value={value}
      onKeyPress={addTodoList}
    />
    <Button addTodoList={addTodoList}>추가</Button>
    <Buttons todos={todos} deleteTodoList={deleteTodoList} />
  </div>
);

export default Page;
