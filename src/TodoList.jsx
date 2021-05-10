import React from 'react';
import NotingTodo from './NothingTodo';

function TodoList({todoList}) {
  return (
    <div>
      {todoList.length > 0
        ? <ol>{todoList}</ol>
        : <NotingTodo />
      }
    </div>
  )
}

export default TodoList;