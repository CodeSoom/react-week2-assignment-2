import React from 'react';

function TodoList({ todoList }) {
  return (
    <ol>
      {todoList}
    </ol>
  )
}

export default TodoList;