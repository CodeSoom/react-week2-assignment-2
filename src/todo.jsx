import React from 'react';

function Todo({ children }) {
  return (
    <p>
      {children.length
        ? children
        : '할 일이 없어요!'}
    </p>
  );
}

Todo.List = ({ index, value, onClick }) => (
  <p>
    {`${index + 1}.${value}`}
    <button type="button" onClick={() => onClick(index)}>완료</button>
  </p>
);

export default Todo;
