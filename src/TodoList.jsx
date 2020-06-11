import React from 'react';

import Task from './Task';

function TodoList({ toDos, handleDeleteTask }) {
  return (
    <div>
      {toDos.length === 0
        ? '할 일이 없어요!'
        : (
          <ol>
            {toDos.map((toDo) => {
              const { id } = toDo;
              return (
                <Task
                  key={id}
                  toDo={toDo}
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
