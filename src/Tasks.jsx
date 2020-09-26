import React from 'react';

const isEmpty = (arr) => arr.length === 0;

const Tasks = ({ tasks, onClickDeleteTask }) => {
  if (isEmpty(tasks)) {
    return <p>할 일이 없어요!</p>;
  }
  return (
    <ol>
      {tasks.map(({ id, text }) => (
        <li key={id}>
          {text}
          <button type="button" onClick={() => onClickDeleteTask({ id })}>완료</button>
        </li>
      ))}
    </ol>
  );
};

export default Tasks;
