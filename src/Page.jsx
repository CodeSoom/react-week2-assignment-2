import React from 'react';
import AddForm from './AddForm';
import Todo from './Todo';

export default function Page({ todo, handleClickAdd, handleClickComplete }) {
  return (
    <div>
      <h1>To-do</h1>
      <AddForm onClick={handleClickAdd} />
      {
        todo.length
          ? todo.map((t) => (
            <Todo
              number={todo.indexOf(t)}
              todo={t}
              onClick={handleClickComplete}
              key={t}
            />
          ))
          : <p>할 일이 없어요!</p>
      }
    </div>
  );
}
