import React from 'react';

import Task from './Task';

function TodoList({ todos, handleClickDeleteTask }) {
  return (
    <div>
      {todos.length === 0
        ? '할 일이 없어요!'
        : (
          <ol>
            {todos.map((todo) => (
              <Task
                key={todo.id}
                todo={todo}
                handleClickDeleteTask={handleClickDeleteTask}
              />
            ))}
          </ol>
        )}
    </div>
  );
}

export default TodoList;
