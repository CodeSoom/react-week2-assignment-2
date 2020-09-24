import React from 'react';

import List from './List';
import AddForm from './AddForm';
import Empty from './Empty';

function TodoPage({
  newTodo, todos, onChangeTodo, onClickAdd, onClickFinish,
}) {
  return (
    <div>
      <h2>To-do</h2>
      <AddForm
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
