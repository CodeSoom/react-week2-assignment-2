import React from 'react';

import TodoList from './TodoList';

function TodoLists({ todoLists, onClick }) {
  return (
    <div>
      {
        todoLists.map((todoList, index) => (
          <TodoList
            key={todoList.id}
            todoList={todoList}
            order={index + 1}
            onClick={onClick}
          />
        ))
      }
    </div>
  );
}

export default TodoLists;
