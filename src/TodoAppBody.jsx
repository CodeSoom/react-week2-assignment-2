import React from 'react';
import TodoList from './TodoList';

const TodoAppBodyStyle = {
  marginTop: '10px',
};

const TodoAppBody = ({ todos, onRemoveTodoItem }) => (
  <div style={TodoAppBodyStyle}>
    <TodoList todos={todos} onRemoveTodoItem={onRemoveTodoItem} />
  </div>
);

export default TodoAppBody;
