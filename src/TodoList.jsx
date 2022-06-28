import React from 'react';

export default function TodoList({ todoList, onClick }) {
  return (
    <div>
      {
        (todoList.length > 0)
          ? todoList.map((todo, index) => (
            <div key={todo.key}>
              {`${index + 1}. ${todo.contents}`}
              <button type="button" onClick={() => onClick(todo.key)}>완료</button>
            </div>
          ))
          : <p>할 일이 없어요!</p>
      }
    </div>
  );
}
