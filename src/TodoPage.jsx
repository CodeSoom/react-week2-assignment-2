import React from 'react';

import List from './List';
import AddBox from './AddBox';
import EmptyBox from './EmptyBox';

function TodoPage({
  todo, todos, onChangeTodo, onClickAdd, onClickFinish,
}) {
  return (
    <div>
      <h2>To-do</h2>
      <AddBox
        todo={todo}
        onChange={onChangeTodo}
        onClick={onClickAdd}
      />
      {
        (todos.length === 0) ? <EmptyBox /> : (
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
