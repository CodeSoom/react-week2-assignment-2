import React from 'react';
import Button from './Button';
import Todos from './Todos';
import Input from './Input';
import Title from './Title';
import Container from './Container';

const Page = ({
  todos,
  value,
  onChangeValue,
  addTodoList,
  deleteTodoList,
  inputRef,
}) => (
  <Container>
    <Title>Todo</Title>
    <Input
      type="text"
      inputRef={inputRef}
      onChange={onChangeValue}
      value={value}
      onKeyPress={addTodoList}
    />
    <Button onClick={addTodoList}>추가</Button>
    <Todos todos={todos} deleteTodoList={deleteTodoList} />
  </Container>
);

export default Page;
