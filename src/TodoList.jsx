import React from 'react';

const isEmpty = (array) => array.length === 0;

function TodoList({ todoList, onClick }) {
  if (isEmpty(todoList)) {
    return <div>할 일이 없어요!</div>;
  }

  return (
    <div>
      <ol>
        {todoList.map((todo, index) => (
          <li key={index.toString()}>
            {todo}
            <button type="button" onClick={() => onClick(index)}>완료</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TodoList;
