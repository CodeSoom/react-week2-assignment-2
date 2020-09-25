import React from 'react';

import List from './List';
import Form from './Form';
import Empty from './Empty';

function TodoPage({
  newTodo, todos, onChangeTodo, onClickAdd, onClickFinish,
}) {
  return (
    <div>
      <h2>To-do</h2>
      <Form
        newTodo={newTodo}
        onChange={onChangeTodo}
        onClick={onClickAdd}
      />
      {
        (todos.length === 0) ? <Empty /> : (
          <List
            todos={todos}
            onClick={onClickFinish}
          />
        )
      }
    </div>
  );
}

export default TodoPage;
