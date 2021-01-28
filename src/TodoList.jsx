import React, { useState } from 'react';

const TodoList = ({ submitItem }) => {
  const deleteTodo = (item, idx) => {
  }

  return (
    <>
      <div>
        {submitItem.map((item, index) => (
          <>
            <div>
              {index !== 0 ? `${index} . ` : ''}
              {item.todo}
              {() => setList(item.todo, index)}
              {index !== 0 && <button type="button" onClick={() => deleteTodo(item, index)}>완료</button>}
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default TodoList;
