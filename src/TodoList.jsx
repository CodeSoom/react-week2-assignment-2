import React from 'react';

export default function TodoList({ toDoList, onClick }) {
  return (
    <div>
      {
        toDoList.length > 0 ? toDoList.map((todo, index) => (
          <p>
            {`${index + 1}.${todo}`}
            <button type="button" onClick={() => onClick(index)}>완료</button>
          </p>
        ))
          : <p>할 일이 없어요!</p>
      }
    </div>
  );
}
