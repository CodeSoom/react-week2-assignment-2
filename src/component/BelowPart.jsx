import React from 'react';


function BelowPart({ todo, deleteTodo }) {
  return (
    <div>
      {
        todo.length !== 0 ? todo.map((i, key) => (
          <div key={i}>
            {i}
            <button type="button" onClick={() => deleteTodo(key)}>완료</button>
          </div>
        )) : <div>할 일이 없어요!</div>
      }
    </div>
  );
}

export default BelowPart;
