import React from 'react';
import _ from 'lodash';

function TodoList({ todos, removeTodo }) {
  if (_.isEmpty(todos)) {
    return (<div>할 일이 없어요!</div>);
  }

  return (
    todos.map((todo, index) => (
      <div key={todo.id}>
        {index + 1}
        .
        {' '}
        {todo.value}
        <button type="button" onClick={() => removeTodo(todo)}>완료</button>
      </div>
    ))
  );
}

export default TodoList;
