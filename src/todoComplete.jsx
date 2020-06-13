import React from 'react';

function TodoComplete({ todoList, handleCompleteClick }) {
  return (
    <div>
      {(todoList === null) ? '할 일이 없어요!' : todoList.map((todo, index) => (
        <div key={String(index)}>
          {`${index + 1}. ${todo}`}
          <button type="button" onClick={() => handleCompleteClick(index)}>
            완료
          </button>
        </div>
      ))}
    </div>
  );
}
export default TodoComplete;
