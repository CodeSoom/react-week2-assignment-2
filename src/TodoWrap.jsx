import React, { useState } from 'react';

import TodoInput from './TodoInput';
import Button from './Button';
import TodoList from './TodoList';
import TodoItem from './TodoItem';

function TodoWrap() {
  const [todos, setTodos] = useState(['1', '2']);

  function addTotoItem() {
    console.log('click!');
    setTodos('추가');
  }

  return (
    <div>
      <p>Todo!</p>
      <TodoInput />
      <Button onClick={addTotoItem}>추가</Button>
      <TodoList>
        <TodoItem data={todos} />
        <Button>삭제</Button>
      </TodoList>
    </div>
  );
}

export default TodoWrap;
