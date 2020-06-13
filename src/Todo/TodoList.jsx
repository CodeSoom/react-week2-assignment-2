import React from 'react';


export default function TodoList({ todoList, removeTodo }) {
  return (
    <div>
      {
        todoList.length === 0
          ? <p>할 일이 없어요!</p>
          : todoList.map((todo, todoIndex) => (
            <p key={todo.id}>
              {`${todoIndex + 1}. ${todo.content}`}
              <button type="button" data-todo-id={todo.id} onClick={removeTodo}>
                완료
              </button>
            </p>
          ))
      }
    </div>
  );
}
