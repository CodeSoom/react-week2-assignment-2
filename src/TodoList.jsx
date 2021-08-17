import React from 'react';

function TodoList({ todos, onClick }) {
  return (
    todos.length > 0
      ? todos.map((_todo, index) => (
        <div key={_todo}>
          {`${index + 1}. ${_todo}`}
          <button type="button" onClick={onClick}>완료</button>
        </div>
      ))
      : <div>할 일이 없어요!</div>
  );
}

export default TodoList;
