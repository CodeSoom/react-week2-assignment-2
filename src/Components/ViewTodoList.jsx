import React from 'react';

import DeleteTodo from './DeleteTodo';

function ViewTodoList({ todoText, todoList, setTodo }) {
  const listItems = todoList.map(
    (todo) => (
      <li key={todo}>
        {todo}
        <DeleteTodo todo={todo} todoText={todoText} todoList={todoList} setTodo={setTodo} />
      </li>
    ),
  );

  return (todoList.length ? (<ol>{listItems}</ol>) : (<p>할 일이 없어요!</p>));
}
export default ViewTodoList;
