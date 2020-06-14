import React from 'react';
import TodoListItem from './TodoList/TodoListItem';

function TodoList({ todos, onClickDelete }) {
  return (
    <div>
      {
        todos.length !== 0 ? todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            sentence={todo.sentence}
            id={todo.id}
            onClickDelete={onClickDelete}
          />
        )) : <div>할 일이 없어요!</div>
      }
    </div>
  );
}

export default TodoList;
