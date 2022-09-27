import React from 'react';

export default function TodoList({ toDoList, onClick }) {
  if (toDoList.length > 0) {
    return (toDoList.map((todo, index) => (
      <p key={todo}>
        {`${index + 1}.${todo}`}
        <button type="button" onClick={() => onClick(index)}>완료</button>
      </p>
    )));
  }
  return <p>할 일이 없어요!</p>;
}
