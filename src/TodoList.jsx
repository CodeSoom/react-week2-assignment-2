import React from 'react';
import Todo from './Todo';

function TodoList({ todoList, onClick }) {
  return (
    <div>
      {todoList.length ? (
        <ol>
          {todoList.map((todo) => (
            <Todo key={todo.id} todo={todo} onClickDelete={onClick} />
          ))}
        </ol>
      ) : (
        <p>할 일이 없어요!</p>
      )}
    </div>
  );
}

export default TodoList;
