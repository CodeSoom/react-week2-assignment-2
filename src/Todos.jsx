import React from 'react';
import Button from './Button';

const Buttons = ({ todos, deleteTodoList }) => {
  const onDeleteTodoList = (id) => () => deleteTodoList(id);

  return (
    <ol>
      {todos.map((todo) => (
        <li key={todo.id}>
          <p>{todo?.content}</p>
          <Button type="button" onClick={onDeleteTodoList(todo.id)}>완료</Button>
        </li>
      ))}
    </ol>
  );
};

export default Buttons;
