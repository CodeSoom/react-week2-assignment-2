import React from 'react';

const TodoList = ({ todoItems }) => {
  if (todoItems.length === 0) {
    return (
      <p>할 일이 없어요!</p>
    );
  }

  return (
    <>
      <ol>
        {todoItems.map((todo) => (
          <li key={todo}>
            {todo}
            <button
              type="button"
            >
              완료
            </button>
          </li>
        ))}
      </ol>
    </>
  );
};

export default TodoList;
