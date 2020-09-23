import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ list }) {
  return (
    <div>
      {
        list.length === 0
          ? '할 일이 없어요!'
          : (
            <ol>
              {list.map((item) => (
                <TodoItem
                  key={item}
                  value={item}
                />
              ))}
            </ol>
          )
      }
    </div>
  );
}

export default TodoList;
