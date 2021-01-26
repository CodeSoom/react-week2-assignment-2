import React from 'react';

import TodoInput from './todoInput';
import AddButton from './addButton';
import NothingToDo from './nothingToDo';
import List from './list';

export default function Main({
  todoInput,
  setInput,
  getInput,
  todoList,
  onClickComplete,
}) {
  return (
    <div>
      <h1>To-do</h1>
      <TodoInput value={todoInput} onChange={setInput} />
      <AddButton onClick={getInput} />
      {todoList.length === 0 ? <NothingToDo /> : (
        <List
          todoList={todoList}
          onClickComplete={onClickComplete}
        />
      )}
    </div>
  );
}
