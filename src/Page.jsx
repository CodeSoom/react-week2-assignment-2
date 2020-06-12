import React from 'react';
import AddForm from './AddForm';
import Todos from './Todos';

export default function Page({ addFormState, todoState }) {
  const { newTodo, handleChange, handleSubmit } = addFormState;
  const { ids, todos, handleClickComplete } = todoState;
  const haveToDo = (arr) => arr.length !== 0;

  return (
    <div>
      <h1>To-do</h1>
      <AddForm newTodo={newTodo} onChange={handleChange} onSubmit={handleSubmit} />
      {
        haveToDo(todos)
          ? <Todos ids={ids} todos={todos} onClick={handleClickComplete} />
          : <p>할 일이 없어요!</p>
      }
    </div>
  );
}
