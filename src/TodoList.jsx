import React from 'react';
import Todo from './Todo';

const isEmpty = (array) => array.length === 0;

function TodoList({ todoList, onClickDelete }) {
  if (isEmpty(todoList)) {
    return <div>할 일이 없어요!</div>;
  }

  return (
    <div>
      <ol>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <Todo
              todo={todo}
              onClickDelete={onClickDelete}
            />
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TodoList;
