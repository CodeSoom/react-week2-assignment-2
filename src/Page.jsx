import React from 'react';

const Page = ({
  todos,
  value,
  onChangeValue,
  addTodoList,
  deleteTodoList,
}) => (
  <div>
    <h2>Todo</h2>
    <input type="text" onChange={onChangeValue} value={value} />
    <button type="button" onClick={addTodoList}>추가</button>
    <ol>
      {todos.map((todo) => (
        <li key={todo.id}>
          <p>{todo?.content}</p>
          <button type="button" onClick={() => deleteTodoList(todo.id)}>완료</button>
        </li>
      ))}
    </ol>
  </div>
);

export default Page;
