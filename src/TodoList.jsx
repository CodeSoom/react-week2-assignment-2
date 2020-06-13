import React from 'react';

import Task from './Task';

function TodoList({ todos, handleDeleteTask }) {
  return (
    <div>
      {todos.length === 0
        ? '할 일이 없어요!'
        : (
          <ol>
            {todos.map((todo) => {
              const { id } = todo;
              return (
                <Task
                  key={id}
                  todo={todo}
                  handleDeleteTask={handleDeleteTask}
                />
              );
            })}
          </ol>
        )}
    </div>
  );
}

export default TodoList;
