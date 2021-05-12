/* eslint-disable react/prop-types */
import React from 'react';

function ToDoItems({ toDoList, onClick }) {
  return (
    <ol type="1">
      {toDoList.length > 0 ? (
        toDoList.map((i) => (
          <li>
            {i}
            <button
              type="button"
              onClick={() => {
                onClick(i);
              }}
            >
              완료
            </button>
          </li>
        ))
      ) : (
        <p>할 일이 없어요!</p>
      )}
    </ol>
  );
}

export default ToDoItems;
