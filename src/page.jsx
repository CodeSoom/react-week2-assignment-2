import React from 'react';
import Add from './add.jsx';
import List from './list.jsx';

function Page({addFormState, todoState}) {

  const { newTodo, handleChange, handleSubmit } = addFormState;

  const { todoList } = todoState;

  return (
    <div>
      <h1>TO-DO</h1>
      <Add newTodo={newTodo} onChange={handleChange} onSubmit={handleSubmit} />
      <List todoList={todoList} />
    </div>  
  );
}

export default Page;
