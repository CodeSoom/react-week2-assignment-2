import React from 'react';
import TodoInput from './TodoInput';

const h1Style = {
  textAlign: 'center',
};

const TodoAppHeader = ({ onAddTodoItem }) => (
  <div>
    <h1 style={h1Style}>To-do</h1>
    <div>
      <TodoInput onAddTodoItem={onAddTodoItem} />
    </div>
  </div>
);

export default TodoAppHeader;
