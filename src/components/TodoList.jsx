import React from 'react';

import TodoItems from './TodoItems';

function TodoList({ list, onClick }) {
  return (
    <div>
      {
        list.length === 0
          ? <p>할 일이 없어요!</p>
          : (
            <TodoItems
              list={list}
              onClick={onClick}
            />
          )
      }
    </div>
  );
}

export default TodoList;
