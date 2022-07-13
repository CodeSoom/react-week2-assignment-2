import React from 'react';

const ToDoList = ({ todoList, onClick }) => {
  if (todoList.length === 0) {
    return (
      <p>할 일이 없어요!</p>
    );
  }

  const listItem = todoList.map((item) => (
    <li key={item}>
      {item}
      <button type="button" onClick={() => onClick({ finishedItem: item })}>완료</button>
    </li>
  ));

  return (
    <ol>
      {listItem}
    </ol>
  );
};

export default ToDoList;
