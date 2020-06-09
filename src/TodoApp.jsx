import React from 'react';
import TodoAppHeader from './TodoAppHeader';
import TodoAppBody from './TodoAppBody';

const TodoAppStyle = {
  width: '300px',
  margin: '0 auto',
  border: '1px solid black',
  padding: '10px',
};

const TodoApp = ({ todos, onAddTodoItem, onRemoveTodoItem }) => (
  <div style={TodoAppStyle}>
    <TodoAppHeader onAddTodoItem={onAddTodoItem} />
    <TodoAppBody todos={todos} onRemoveTodoItem={onRemoveTodoItem} />
  </div>
);

export default TodoApp;
