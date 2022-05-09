import React from 'react';

export default function TodoList({ todoList, onClick }) {
  if (todoList.length === 0) {
    return <p>할 일이 없어요!</p>;
  }

  return (
    <>
      <br />
      {todoList.map((item, index) => (
        <div key={item.id}>
          {index + 1}
          :
          {item.data}
          <button type="button" onClick={() => onClick({ id: item.id })}>
            완료
          </button>
          <br />
        </div>
      ))}
    </>
  );
}
