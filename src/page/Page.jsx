import React from 'react';
import AddPart from '../component/AddPart';
import BelowPart from '../component/BelowPart';


function Page({ todo, addTodo, deleteTodo }) {
  return (
    <div>
      <h1>To-do</h1>
      <AddPart addTodo={addTodo} />
      <BelowPart todo={todo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default Page;
