import React from 'react';
import AddTodoList from '../component/AddTodoList';
import ShowTodoList from '../component/ShowTodoList';


function Page({ todos, addTodo, deleteTodo }) {
  return (
    <div>
      <h1>To-do</h1>
      <AddTodoList addTodo={addTodo} />
      <ShowTodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default Page;
