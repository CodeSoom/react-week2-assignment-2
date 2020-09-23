import React from 'react';

import TodoItems from './TodoItems';

function TodoList({ list }) {
  return (
    <div>
      {
        list.length === 0
          ? <p>할 일이 없어요!</p>
          : (
            <TodoItems
              list={list}
            />
          )
      }
    </div>
  );
}

export default TodoList;
