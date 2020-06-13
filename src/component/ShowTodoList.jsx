import React from 'react';

function ShowTodoList({ todos, deleteTodo }) {
  return (
    <div>
      {
        todos.length !== 0 ? todos.map((i) => (
          <div key={i.id}>
            {i.sentence}
            <button type="button" onClick={() => deleteTodo(i.id)}>완료</button>
          </div>
        )) : <div>할 일이 없어요!</div>
      }
    </div>
  );
}

export default ShowTodoList;
