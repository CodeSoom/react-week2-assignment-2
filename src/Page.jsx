import React from 'react';
import Button from './Button';
import TodoList from './TodoList';
import Input from './Input';
import Title from './Title';
import Container from './Container';

const Page = ({
  todos,
  value,
  onChangeValue,
  addTodo,
  deleteTodo,
  inputRef,
  checkTodo,
}) => (
  <Container>
    <Title>Todo</Title>
    <Input
      type="text"
      inputRef={inputRef}
      onChange={onChangeValue}
      value={value}
      onKeyPress={addTodo}
    />
    <Button onClick={addTodo}>추가</Button>
    {todos.length === 0
      ? (<p>할 일이 없어요!</p>)
      : (
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          checkTodo={checkTodo}
        />
      )}
  </Container>
);

export default Page;
